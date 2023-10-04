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
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainerStyle}>
        <Image
          style={[styles.imageStyle, styles.imageStyle2, {marginTop: 90}]}
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
