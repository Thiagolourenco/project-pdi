/**
 * @format
 */
import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {logo} from '../assets';

import Login from './Login';
import Users from './Users';
import {StackRoutesType} from '../@types';

const Stack = createStackNavigator<StackRoutesType>();

const Routes = (): JSX.Element => {
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
              <Pressable style={styles.buttonAddNew}>
                <Text style={styles.buttonAddNewText}>Adicionar novo</Text>
              </Pressable>
            );
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
  imageLogo: {
    width: 98,
    height: 40,
    marginLeft: 12,
  },
});

export default Routes;
