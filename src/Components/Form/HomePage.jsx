import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  const handle_Login = () => {
    navigation.navigate('Login');
  };
  const handle_SignUP = () => {
    navigation.navigate('Sign Up');
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#5521CE', fontSize: 30, marginBottom: 15}}>
        Login Template
      </Text>
      <View>
        <Text style={{color: '#000', fontSize: 17}}>
          The easiest way to start with your amazing
        </Text>
        <Text
          style={{
            color: '#000',
            marginHorizontal: 'auto',
            fontSize: 17,
            marginBottom: 20,
          }}>
          application
        </Text>
      </View>
      <TouchableOpacity
        onPress={handle_Login}
        style={{
          elevation: 10,
          backgroundColor: '#5521CE',
          width: 290,
          height: 45,
          borderRadius: 5,
          marginBottom: 20,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            marginVertical: 'auto',
          }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handle_SignUP}
        style={{
          elevation: 50,
          width: 290,
          height: 45,
          borderRadius: 5,
          borderWidth: 0.5,
        }}>
        <Text
          style={{
            color: '#5521CE',
            textAlign: 'center',
            marginVertical: 'auto',
          }}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
