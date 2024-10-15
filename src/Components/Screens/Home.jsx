import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation();
  const handle_Navigation = () => {
    navigation.navigate('About');
  };

  const Async_Data = () => {
    let name = 'mustafa';
    AsyncStorage.setItem('user', JSON.stringify(name));
  };
  const DataName = () => {
    let nam = AsyncStorage.getItem('user');
    console.log(nam);
  };
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 'auto',
        height: 'auto',
        width: 'auto',
      }}>
      <Text
        style={{
          fontSize: 25,
          color: '#000',
          fontWeight: 'bold',
          marginBottom: 5,
        }}>
        Home
      </Text>

      <TouchableOpacity>
        <Text onPress={handle_Navigation} style={{color: '#000'}}>
          Go to About
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={Async_Data} style={{color: '#000', marginBottom: 10}}>
          {' '}
          Save Data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={DataName} style={{color: '#000'}}>
          {' '}
          Get Data
        </Text>
      </TouchableOpacity>
    </View>
  );
  // const styles = StyleSheet.create({
  //   container: {
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     width: '100vw',
  //     height: '100vh',
  //   },
  //   heading: {
  //     fontSize: 25,
  //     color: '',
  //     fontWeight: 'bold',
  //     marginBottom: 5,
  //   },
  // });
};

export default Home;
