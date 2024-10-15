import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 'auto',
      }}>
      <Text
        style={{
          fontSize: 25,
          color: '#000',
          fontWeight: 'bold',
          marginBottom: 5,
        }}>
        Contact
      </Text>
      <TouchableOpacity>
        <Text style={{color: '#000'}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
