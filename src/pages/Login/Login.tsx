/**
 * @format
 */

import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {logo} from '../../assets';
import useStyles from './Login.style';
import {StackRoutesType} from '../../@types';
import {StackNavigationProp} from '@react-navigation/stack';

type LoginStackProps = StackNavigationProp<StackRoutesType, 'Users'>;

const Login = (): JSX.Element => {
  const styles = useStyles();

  const {navigate} = useNavigation<LoginStackProps>();

  const handleRegister = () => navigate('Users');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logoImage} width={197} height={80} />

      <View style={styles.content}>
        <Text style={styles.title}>Buscar usuário</Text>
        <Text style={styles.subTitle}>
          Crie sua conta através do seu usuário do GitHub
        </Text>

        <TextInput placeholder="@username" style={styles.input} />

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Pressable>
      </View>

      <Text style={styles.termsOfUseText}>
        Termos de política e privacidade
      </Text>
    </SafeAreaView>
  );
};

export default Login;
