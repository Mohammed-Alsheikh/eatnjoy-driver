/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components';
import {DrawerActions} from 'react-navigation-drawer';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {data} from './mock';
import {ROUTES} from '../../../constants';
import Colors from '../../styles';
import Item from './Item';
import {fetchOrders} from './actions';
import reactotron from 'reactotron-react-native';
import {Parse} from 'parse/react-native';

const BACK = require('../../../assets/home.jpg');

export default ({navigation}) => {
  const [items, setItems] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {reactotron.log(items)}
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
        <Appbar.Content title="Pending Orders" />
      </Appbar.Header>
      <ImageBackground
        source={BACK}
        resizeMethod="resize"
        resizeMode="cover"
        style={{flex: 1}}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <Item
              item={item}
              onPress={() => navigation.navigate(ROUTES.OrderDetails, {item})}
            />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
