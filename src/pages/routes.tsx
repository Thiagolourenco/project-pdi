/**
 * @format
 */
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {logo} from '../assets';
import {StackRoutesType} from '../@types';

import Login from './Login';
import Users from './Users';
import Repositories from './Repositories';

Icon.loadFont();

const Stack = createStackNavigator<StackRoutesType>();

type LoginStackProps = StackNavigationProp<StackRoutesType, 'Login'>;

const Routes = (): JSX.Element => {
  const {goBack, navigate} = useNavigation<LoginStackProps>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          headerLeft: () => {
            return <Image source={logo} style={styles.imageLogo} />;
          },
          headerTitle: '',
          headerRight: () => {
            return (
              <Pressable
                style={styles.buttonAddNew}
                onPress={() => navigate('Login')}>
                <Text style={styles.buttonAddNewText}>Adicionar novo</Text>
              </Pressable>
            );
          },
        }}
      />

      <Stack.Screen
        name="Repositories"
        component={Repositories}
        options={{
          headerLeft: () => {
            return (
              <Pressable onPress={goBack}>
                <Icon
                  name="arrow-back"
                  size={32}
                  color="#000"
                  style={styles.iconGoBack}
                />
              </Pressable>
            );
          },
          headerTitle: '',
          headerRight: () => {
            return <View style={styles.imageProfile} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonAddNew: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 100,
    marginRight: 12,
  },
  buttonAddNewText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  iconGoBack: {
    marginLeft: 12,
  },
  imageLogo: {
    width: 98,
    height: 40,
    marginLeft: 12,
  },
  imageProfile: {
    width: 32,
    height: 32,
    backgroundColor: '#000',
    borderRadius: 16,
    marginRight: 16,
  },
});

export default Routes;
