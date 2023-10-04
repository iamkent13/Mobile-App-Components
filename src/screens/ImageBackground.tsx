import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  Pressable,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{marginTop: 10, marginHorizontal: 20, borderRadius: 15}}
        imageStyle={{borderRadius: 15}}
        source={require('./src/images/mountain.jpg')}>
        <View
          style={{
            paddingVertical: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginTop: 40,
            marginBottom: 40,
          }}>
          <Text style={{color: '#FFFFFF'}}>Hello World</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
