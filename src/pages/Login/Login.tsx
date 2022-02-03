/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useLazyQuery} from '@apollo/client';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

import {logo} from '../../assets';
import useStyles from './Login.style';
import {StackRoutesType} from '../../@types';
import {StackNavigationProp} from '@react-navigation/stack';
import {GET_USER} from '../../graphql';
import useUserStore from '../../store/user';
import {ToastError} from '../../components';

type LoginStackProps = StackNavigationProp<StackRoutesType, 'Users'>;

const Login = (): JSX.Element => {
  const [username, setUserName] = useState<string>('');
  const [errorToast, setErrorToast] = useState<boolean>(false);

  const styles = useStyles();

  const addUser = useUserStore(state => state.addUser);

  const {navigate} = useNavigation<LoginStackProps>();

  const [GetUser, {data, loading, error}] = useLazyQuery(GET_USER);

  useEffect(() => {
    crashlytics().log('App Mounted');

    if (error !== undefined) {
      crashlytics().recordError(error);
      setErrorToast(true);
    }
  }, [error]);

  const handleRegister = async () => {
    await GetUser({variables: {username: username}});

    // TODO => Melhorar a forma que é salvo a informação no zustand

    await analytics().logEvent('login', {
      item: 'Login',
      size: 'L',
    });

    if (data) {
      addUser(data?.user);
      navigate('Users');
      setUserName('');
    }

    // if (!data) {
    //   console.log('OPA ');
    //   setErrorToast(true);
    // }
  };

  const handleToastError = () => setErrorToast(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logoImage} width={197} height={80} />

      <View style={styles.content}>
        <Text style={styles.title}>Buscar usuário</Text>
        <Text style={styles.subTitle}>
          Crie sua conta através do seu usuário do GitHub
        </Text>

        <TextInput
          placeholder="@username"
          style={styles.input}
          value={username}
          onChangeText={setUserName}
        />

        <Pressable style={styles.button} onPress={handleRegister}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Cadastrar</Text>
          )}
        </Pressable>
      </View>

      <Text style={styles.termsOfUseText}>
        Termos de política e privacidade
      </Text>

      {errorToast && <ToastError onPress={handleToastError} />}
    </SafeAreaView>
  );
};

export default Login;
