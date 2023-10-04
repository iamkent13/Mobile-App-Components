import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./src/images/mountain.jpg')}
          style={{width: 400, height: 200, marginTop: 10, borderRadius: 9}}
          resizeMode="cover"
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1696187025297-6082c54a99c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2944&q=80',
          }}
          style={{width: 400, height: 200, marginTop: 10, borderRadius: 9}}
          resizeMode="cover"
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
          style={{width: 400, height: 200, marginTop: 10, borderRadius: 9}}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default App;
