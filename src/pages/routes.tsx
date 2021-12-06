/**
 * @format
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './Login';

const Stack = createStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
