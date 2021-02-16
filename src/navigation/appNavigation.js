import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native-paper';
import Drawer from './CustomDrawer';
import MainStack from './mainStack';

import {ROUTES} from '../constants';
import Colors from '../views/styles';

export default createDrawerNavigator(
  {
    [ROUTES.MainStack]: {
      screen: MainStack,
      navigationOptions: () => {
        return {
          drawerIcon: () => (
            <Icon name="home" style={{fontSize: 28, color: Colors.primary}} />
          ),
          drawerLabel: () => <Text style={styles.detailsText}>{'Home'}</Text>,
        };
      },
    },
  },
  {
    initialRouteName: ROUTES.MainStack,
    order: [ROUTES.MainStack],
    contentComponent: props => <Drawer {...props} />,
  },
);

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    margin: 18,
  },
  detailsText: {
    fontSize: 16,
    margin: 10,
  },
  logOutImage: {
    width: 36,
    height: 36,
    position: 'absolute',
    top: 255,
  },
  logOutText: {
    fontSize: 22,
    top: 270,
    color: '#c70d3a',
  },
});
