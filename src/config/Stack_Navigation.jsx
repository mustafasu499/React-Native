import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Components/Form/Login';
import SignUp from '../Components/Form/SignUp';
import HomePage from '../Components/Form/HomePage';
import Products from '../Components/Products';
const Stack_Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="product"
          component={Products}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Sign Up"
          component={SignUp}
        />
      </Stack.Navigator>
    </>
  );
};

export default Stack_Navigation;
