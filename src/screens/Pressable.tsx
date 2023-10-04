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
} from 'react-native';

const App = () => {
  function testAlert() {
    Alert.alert('Judul', 'Pesan di body nya', [
      {
        text: 'Nanti aja',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Ok', onPress: () => console.log('Ok Pressed')},
    ]);
  }

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainerStyle}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
          ]}
          // onPress={() => testAlert()}
          // onLongPress={() => testAlert()}
          // onPressIn={() => testAlert()}
          // onPressOut={() => testAlert()}
        >
          <Text>I'm pressable!</Text>
        </Pressable>

        {/* <Button title="Beli" color={'crimson'} onPress={() => testAlert()} /> */}

        <TouchableOpacity>
          <Image
            style={[styles.imageStyle, styles.imageStyle2, {marginTop: 90}]}
            source={require('./src/images/mountain.jpg')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainerStyle}>
        <Image
          style={[styles.imageStyle, styles.imageStyle2]}
          source={require('./src/images/mountain.jpg')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.imageContainerStyle}>
        <Image
          style={[styles.imageStyle, styles.imageStyle2]}
          source={require('./src/images/mountain.jpg')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.imageContainerStyle}>
        <Image
          style={[styles.imageStyle, styles.imageStyle2]}
          source={require('./src/images/mountain.jpg')}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  imageStyle: {width: 300, height: 200, borderRadius: 8},
  imageStyle2: {marginTop: 20},
});
