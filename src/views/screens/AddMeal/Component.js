/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Image, TouchableOpacity, View} from 'react-native';
import {Container, Content} from 'native-base';
import {
  Appbar,
  Title,
  Paragraph,
  Text,
  Menu,
  Divider,
  Surface,
  TextInput,
} from 'react-native-paper';
import Colors from '../../styles';
import ImagePicker from 'react-native-image-picker';
import {createMeal, getTypes} from './action';

const options = {
  title: 'Select Image',
  storageOptions: {
    path: 'images',
  },
};

const ADD = require('../../../assets/add-photo.png');

export default ({navigation}) => {
  const [types, setTypes] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState(0);
  const [time, setTime] = useState('');
  const [enoughFor, setEnoughFor] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(ADD);

  const [visible, setVisible] = useState(false);

  const ShowImagePicker = () =>
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        const source = {uri: response.uri};
        setImage(response);
      }
    });

  const submit = () => {
    createMeal(name, desc, enoughFor, time, price, image, type);
  };

  useEffect(() => {
    (async () => {
      const res = await getTypes();
      setTypes(res);
    })();
  }, []);

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="New Meal" />
      </Appbar.Header>
      <Content style={{margin: 12}}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={ShowImagePicker}
          style={{alignSelf: 'center'}}>
          <Image
            source={image.uri ? {uri: image.uri} : image}
            resizeMethod="resize"
            resizeMode="cover"
            style={{width: 240, height: 240, borderRadius: 8, marginBottom: 12}}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Menu
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={
              <TouchableOpacity
                style={{
                  borderRadius: 12,
                  alignSelf: 'center',
                  backgroundColor: Colors.primary,
                  paddingVertical: 8,
                  paddingHorizontal: 24,
                }}
                onPress={() => setVisible(true)}>
                <Text style={{color: 'white'}}>
                  {type ? type.get('title') : 'Select your dish type'}
                </Text>
              </TouchableOpacity>
            }>
            {types.map(e => (
              <React.Fragment>
                <Menu.Item
                  title={e.get('title')}
                  onPress={() => {
                    setVisible(false);
                    setType(e);
                  }}
                />
                <Divider />
              </React.Fragment>
            ))}
          </Menu>
        </View>
        <Surface
          style={{
            margin: 24,
            elevation: 3,
            alignSelf: 'stretch',
            borderRadius: 2,
            paddingVertical: 12,
            paddingHorizontal: 32,
          }}>
          <TextInput
            label="Meal Name"
            mode="outlined"
            value={name}
            onChangeText={val => setName(val)}
          />
          <TextInput
            label="Time in minutes"
            mode="outlined"
            value={time}
            onChangeText={val => setTime(val)}
          />
          <TextInput
            label="Enough for"
            mode="outlined"
            value={enoughFor}
            onChangeText={val => setEnoughFor(val)}
          />
          <TextInput
            label="Price"
            mode="outlined"
            value={price}
            onChangeText={val => setPrice(val)}
          />
        </Surface>
        <TextInput
          label="Description"
          mode="outlined"
          multiline={true}
          numberOfLines={4}
          value={desc}
          onChangeText={val => setDesc(val)}
        />
        <Submit onPress={submit}>
          <Text style={{fontSize: 18, color: 'white'}}>{'Submit'}</Text>
        </Submit>
      </Content>
    </Container>
  );
};

const Submit = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: ${Colors.primary};
  width: 250;
  border-radius: 200px;
  align-self: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
