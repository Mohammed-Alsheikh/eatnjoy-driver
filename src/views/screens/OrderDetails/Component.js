/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {ImageBackground, View, FlatList, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {Appbar, Title, Button} from 'react-native-paper';
import Colors from '../../styles';
import Item from './Item';
import Info from './Info';
import {rejectOrder, acceptOrder} from './actions';

import reactotron from 'reactotron-react-native';
import {ROUTES} from '../../../constants';

const BACK = require('../../../assets/home.jpg');

export default ({navigation}) => {
  const Order = navigation.getParam('item');
  const [meals, setMeals] = useState([]);

  if (!Order) {
    return null;
  }

  useEffect(() => {
    const Meals = Order.relation('items');
    Meals.query()
      .find()
      .then(res => setMeals(res));
  }, []);

  const accept = () => {
    // acceptOrder(Order.id);
    return navigation.navigate(ROUTES.Drivers, {Order});
  };

  const reject = () => {
    rejectOrder(Order.id);
    return navigation.navigate(ROUTES.Home);
  };

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Order Details" />
      </Appbar.Header>
      <ImageBackground
        source={BACK}
        resizeMethod="resize"
        resizeMode="cover"
        style={{flex: 1}}>
        <Content>
          <FlatList
            data={meals}
            renderItem={({item}) => <Item item={item} />}
          />

          <Info Order={Order} />

          <View
            style={{
              marginTop: 24,
              alignSelf: 'center',
              paddingHorizontal: 40,
              paddingVertical: 12,
              borderRadius: 5,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: 'grey',
            }}>
            <Title style={{fontSize: 18, color: `${Colors.primary}aa`}}>
              {`Total Cash: ${Order.get('price')} QT`}
            </Title>
          </View>
          <View
            style={{
              marginVertical: 18,
              alignSelf: 'center',
              flexDirection: 'row-reverse',
            }}>
            <Button
              onPress={accept}
              style={{marginLeft: 12}}
              mode="contained"
              icon="check">
              {'Accept'}
            </Button>
            <Button onPress={reject} mode="contained" icon="cancel">
              {'Cancel'}
            </Button>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  );
};
