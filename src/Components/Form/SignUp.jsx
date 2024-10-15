import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const [LoginInput, setLoginInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigation = useNavigation();
  const back_Btn = () => {
    navigation.goBack(1);
  };
  const login_Btn = () => {
    navigation.navigate('Login');
  };
  const handle_SignUP = async () => {
    if (LoginInput.name && LoginInput.email && LoginInput.password) {
      await AsyncStorage.setItem('user', JSON.stringify(LoginInput));
      console.log('data save');
      if (LoginInput.name && LoginInput.email && LoginInput.password) {
        LoginInput.email = '';
        LoginInput.password = '';
        LoginInput.name = '';
        console.log('value 0');
      }
    } else {
      console.log('value not 0');
    }
    navigation.navigate('Login');
  };

  return (
    <>
      <TouchableOpacity
        onPress={back_Btn}
        style={{position: 'absolute', top: 40, left: 20}}>
        <AntDesign name="arrowleft" size={24} color="#000" />
      </TouchableOpacity>
      <View
        style={{
          marginVertical: 'auto',
          height: 350,
          backgroundColor: '#f0f0f0',
        }}>
        <Text
          style={{
            color: '#5521CE',
            textAlign: 'center',
            fontSize: 30,
            marginBottom: 30,
            fontWeight: 'bold',
          }}>
          {' '}
          Create Account.
        </Text>
        <TextInput
          value={LoginInput.name}
          onChangeText={value => {
            setLoginInput({...LoginInput, name: value});
          }}
          placeholder="Name"
          style={{
            height: 60,
            borderWidth: 1,
            width: 350,
            marginHorizontal: 'auto',
            borderRadius: 5,
            marginBottom: 30,
            padding: 10,
          }}
        />
        <TextInput
          onChangeText={value => {
            setLoginInput({...LoginInput, email: value});
          }}
          value={LoginInput.email}
          placeholder="Email"
          style={{
            height: 60,
            borderWidth: 1,
            width: 350,
            marginHorizontal: 'auto',
            borderRadius: 5,
            marginBottom: 30,
            padding: 10,
          }}
        />

        <TextInput
          onChangeText={value => {
            setLoginInput({...LoginInput, password: value});
          }}
          value={LoginInput.password}
          secureTextEntry={true}
          placeholder="Password"
          style={{
            height: 60,
            borderWidth: 1,
            width: 350,
            marginHorizontal: 'auto',
            borderRadius: 5,
            marginBottom: 10,
            padding: 10,
          }}
        />
        <TouchableOpacity
          onPress={handle_SignUP}
          style={{
            elevation: 10,
            backgroundColor: '#5521CE',
            width: 340,
            height: 45,
            borderRadius: 5,
            marginTop: 20,
            marginHorizontal: 'auto',
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              marginVertical: 'auto',
              fontSize: 20,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: '#000 ', fontSize: 18, marginRight: 10}}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={login_Btn}>
            <Text style={{color: '#5521CE', fontSize: 18}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignUp;
