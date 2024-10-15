import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [LoginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation();
  const back_Btn = () => {
    navigation.goBack(1);
  };
  const handle_SignUP = () => {
    navigation.navigate('Sign Up');
  };
  const handle_Login = async () => {
    const getData = await AsyncStorage.getItem('user');
    const data = JSON.parse(getData);
    if (
      data.email === LoginInput.email &&
      data.password === LoginInput.password
    ) {
      navigation.navigate('product');
    } else {
      console.log('Error >>>>>>');
    }
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
          Welcome back.
        </Text>
        <TextInput
          onChangeText={value => {
            setLoginInput({...LoginInput, email: value});
          }}
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
        <TouchableOpacity>
          <Text style={{textAlign: 'right', marginRight: 35}}>
            Forgat your password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handle_Login}
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
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 18, marginRight: 10}}>
            Don't have account?
          </Text>
          <TouchableOpacity>
            <Text
              onPress={handle_SignUP}
              style={{color: '#5521CE', fontSize: 18}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
