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
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Image
          source={require('./src/images/mountain.jpg')}
          style={{width: 300, height: 200, marginTop: 20, borderRadius: 9}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Image
          source={require('./src/images/mountain.jpg')}
          style={{width: 300, height: 200, marginTop: 20, borderRadius: 9}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Image
          source={require('./src/images/mountain.jpg')}
          style={{width: 300, height: 200, marginTop: 20, borderRadius: 9}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Image
          source={require('./src/images/mountain.jpg')}
          style={{width: 300, height: 200, marginTop: 20, borderRadius: 9}}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

export default App;
