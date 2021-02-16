/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Parse} from 'parse/react-native';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Title, Surface, TextInput, Text} from 'react-native-paper';
import Colors, {width, height} from '../../styles';
import {Snack} from '../../lib';
import {useSnack} from '../../hooks';

const LOGO = require('../../../assets/logo.png');

export default ({email, setEmail, password, setPassword, goToApp, setUser}) => {
  const Login = () => {
    Parse.User.logIn(email, password)
      .then(user => {
        if (
          user.get('type') === 'driver-a' ||
          user.get('type') === 'driver-n' ||
          user.get('type') === 'driver-o' ||
          user.get('type') === 'god'
        ) {
          setUser(user);
          goToApp();
        }
      })
      .catch(error => {
        SnackHook.onShow();
        SnackHook.setMessage(error.message);
      });
  };

  const SnackHook = useSnack();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={LOGO}
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.logo}
        />
      </View>
      <Surface style={styles.content}>
        <Title style={{color: Colors.primary}}>{'SIGN IN'}</Title>

        <TextInput
          label="username"
          style={{alignSelf: 'stretch', backgroundColor: 'trasperent'}}
          value={email}
          onChangeText={val => setEmail(val)}
        />

        <TextInput
          label="Password"
          style={{alignSelf: 'stretch', backgroundColor: 'trasperent'}}
          value={password}
          secureTextEntry
          onChangeText={val => setPassword(val)}
        />

        <TouchableOpacity
          onPress={Login}
          activeOpacity={0.7}
          style={{
            alignSelf: 'stretch',
            marginHorizontal: 32,
            marginVertical: 24,
            borderRadius: 32,
            backgroundColor: Colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 6,
          }}>
          <Title style={{color: '#fff'}}>{'LOGIN'}</Title>
        </TouchableOpacity>
      </Surface>
      <Snack {...SnackHook}>{SnackHook.message}</Snack>
    </View>
  );
};

const LOGO_SIZE = 150;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    backgroundColor: Colors.background,
    elevation: 2,
    marginHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    padding: 12,
  },
  header: {
    height: height / 3,
    alignSelf: 'stretch',
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    position: 'absolute',
    top: LOGO_SIZE / 2,
    left: width / 2 - LOGO_SIZE / 2,
  },
});
