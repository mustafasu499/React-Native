import React from 'react';
import Login from '../Components/Form/Login';
import SignUp from '../Components/Form/SignUp';
import HomePage from '../Components/Form/HomePage';
import Products from '../Components/Products';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab_Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="product"
          component={Products}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarStyle: {
              display: 'none',
            },
          }}
          name="Home"
          component={HomePage}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarStyle: {
              display: 'none',
            },
          }}
          name="Login"
          component={Login}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarStyle: {
              display: 'none',
            },
          }}
          name="Sign Up"
          component={SignUp}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tab_Navigation;
