import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SwitchActions} from 'react-navigation';
import Login from './login';
import {ROUTES} from '../../../constants';
import {ActivityIndecator} from '../../lib';

export default ({navigation, setUser, storedUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [loading, setLoading] = useState(true);

  const propsObj = {
    password,
    setPassword,
    email,
    setEmail,
    firstName,
    lastName,
    setLastName,
    setFirstName,
    setUser,
    storedUser,
    goToApp: () =>
      navigation.dispatch(SwitchActions.jumpTo({routeName: ROUTES.App})),
  };

  useEffect(() => {
    if (storedUser) {
      navigation.dispatch(SwitchActions.jumpTo({routeName: ROUTES.App}));
    } else {
      setLoading(false);
    }
  }, [navigation, propsObj, setUser, storedUser]);

  if (loading) {
    return <ActivityIndecator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Login {...propsObj} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
