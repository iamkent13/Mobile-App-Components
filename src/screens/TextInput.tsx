import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#272727'}}>
      <TextInput
        style={{
          color: '#FFFFFF',
          backgroundColor: '#303030',
          marginHorizontal: 20,
          marginTop: 10,
          paddingLeft: 10,
          borderRadius: 6,
          elevation: 7,
        }}
        placeholder="Masukkan Email Anda"
        placeholderTextColor={'#FFFFFF'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
    </View>
  );
};

export default App;
