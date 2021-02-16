/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Linking,
} from 'react-native';
import {
  Appbar,
  Title,
  Menu,
  Divider,
  Modal,
  Portal,
  Button,
} from 'react-native-paper';
import Colors from '../../styles';
import reactotron from 'reactotron-react-native';
import Info from './Info';
import {acceptOrder, markOrder, changeStatus} from './actions';

const HOME = require('../../../assets/home.jpg');

const Call = p => Linking.openURL(`tel:${p}`);

export default ({visible, setVisible, request}) => {
  reactotron.log({request});
  const {createdAt, addressInfo, prepTime, price, id, status} = request;

  return (
    <Portal>
      <Appbar.Header style={{zIndex: 23}}>
        <Appbar.BackAction onPress={() => setVisible(false)} />
        <Appbar.Content title="Order Details" />
        <Appbar.Action icon="phone" onPress={() => Call(addressInfo.phone)} />
      </Appbar.Header>
      <Modal
        contentContainerStyle={styles.container}
        visible={visible}
        onDismiss={() => setVisible(false)}>
        <ImageBackground
          source={HOME}
          resizeMethod="resize"
          resizeMode="cover"
          style={{flex: 1}}>
          <ScrollView>
            <Info addressInfo={addressInfo} />
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
              <Title
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: `${Colors.primary}aa`,
                }}>
                {`Total Cash: ${price} QT`}
              </Title>
              <Divider />
              <Title
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: `${Colors.primary}aa`,
                }}>
                {`Time in Kitchen: ${prepTime} minutes`}
              </Title>
            </View>
            <Actions status={status} id={id} hide={() => setVisible(false)} />
          </ScrollView>
        </ImageBackground>
      </Modal>
    </Portal>
  );
};

const Actions = ({status, id, hide}) => {
  reactotron.logImportant({status})
  switch (status) {
    case 'kitchen':
      return (
        <Button
          onPress={() => {
            acceptOrder(id);
            hide();
          }}
          mode="contained"
          style={{alignSelf: 'center', margin: 24}}
          icon="send">
          {'Start Delivary'}
        </Button>
      );
    case 'delivery':
      return (
        <Button
          onPress={() => {
            markOrder(id);
            hide();
            changeStatus('driver-a');
          }}
          mode="contained"
          style={{alignSelf: 'center', margin: 24}}
          icon="send">
          {'Mark as done'}
        </Button>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#fff',
  },
});
