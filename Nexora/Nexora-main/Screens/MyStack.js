import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashScreen from './splashScreen';
import SignInScreen from './SignInScreen';
import forgotpassScreen from './forgotpassScreen';
import emailrecovScreen from './emailrecovScreen.js';
import ResetScreen from './ResetScreen.js';
import SignUpScreen from './SignUpScreen.js'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splashScreen"
          component={splashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="forgotpassScreen"
          component={forgotpassScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="emailrecovScreen"
          component={emailrecovScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetScreen"
          component={ResetScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;