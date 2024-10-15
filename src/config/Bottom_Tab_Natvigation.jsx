import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contact from '../Components/Screens/Contact';
import About from '../Components/Screens/About';
import Home from '../Components/Screens/Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Bottom_Tab_Navigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={
          {
            //   tabBarActiveTintColor: 'white',
            //   tabBarInactiveTintColor: 'black',
            //   tabBarActiveBackgroundColor: 'black',
            //   tabBarInactiveBackgroundColor: 'white',
          }
        }>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => {
              return <AntDesign color={color} name="home" size={30} />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <Feather name="user" size={30} color="black" />;
            },
          }}
          name="About"
          component={About}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return (
                <MaterialIcons name="contact-page" size={30} color="black" />
              );
            },
          }}
          name="Contact"
          component={Contact}
        />
      </Tab.Navigator>
    </>
  );
};

export {Bottom_Tab_Navigation};
