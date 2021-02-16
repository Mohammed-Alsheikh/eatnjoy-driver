import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import Colors from '../styles';

export default ({}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator animating={true} color={Colors.primary} size="large" />
    </View>
  );
};
