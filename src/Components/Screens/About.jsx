import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const About = () => {
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
        About
      </Text>
      <TouchableOpacity>
        <Text style={{color: '#000'}}>Go to Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
