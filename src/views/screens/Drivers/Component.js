/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FlatList, ImageBackground} from 'react-native';
import {Container, Content} from 'native-base';
import {Appbar, Button, TextInput} from 'react-native-paper';
import Colors from '../../styles';
import Item from './Item';
import {acceptOrder, getDrivers} from './actions';
import reactotron from 'reactotron-react-native';

const BACK = require('../../../assets/home.jpg');

export default ({navigation}) => {
  const [time, setTime] = useState('');
  const [drivers, setDrivers] = useState('');
  const [selected, setSelected] = useState(null);

  const Order = navigation.getParam('Order');

  const submit = () => {
    if (time === '' || !selected) {
      return;
    }
    acceptOrder(Order.id, selected, time);
    return navigation.popToTop();
  };

  useEffect(() => {
    getDrivers().then(r => setDrivers(r));
  }, []);

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Drivers" />
      </Appbar.Header>
      <ImageBackground
        source={BACK}
        resizeMethod="resize"
        resizeMode="cover"
        style={{flex: 1}}>
        <Content style={{margin: 24}}>
          <FlatList
            data={drivers}
            renderItem={({item}) => (
              <Item
                item={item}
                onPress={() => setSelected(item)}
                selected={selected}
              />
            )}
          />
          <TextInput
            label="Time In Kitchen? "
            mode="flat"
            keyboardType="number-pad"
            placeholder="In Minutes"
            value={time}
            style={{backgroundColor: 'transparent', marginTop: 12}}
            onChangeText={text => setTime(text)}
          />
          <Button
            style={{alignSelf: 'center', marginVertical: 24}}
            mode="contained"
            onPress={submit}
            icon="send">
            {'Confirm'}
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  );
};
