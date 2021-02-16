import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Surface, Title} from 'react-native-paper';
import {width} from '../styles';

const Item = ({uri, title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.item} onPress={onPress}>
      <Image
        source={{uri}}
        resizeMode="cover"
        resizeMethod="resize"
        style={styles.image}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 4}}>
        <Title>{title}</Title>
      </View>
    </TouchableOpacity>
  );
};

const Col = ({data, onPress}) => {
  return (
    <View style={styles.col}>
      {data.map(item => (
        <Item {...item} onPress={onPress} />
      ))}
    </View>
  );
};

export default ({data, onPress}) => {
  let one = [],
    two = [];

  data.forEach((item, index) => {
    index % 2 ? one.push(item) : two.push(item);
  });

  return (
    <View style={styles.container}>
      <Col data={one} onPress={onPress} />
      <Col data={two} onPress={onPress} />
    </View>
  );
};

const WIDTH = width / 2 - 18;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
  item: {
    marginVertical: 6,
    borderColor: '#777',
    borderWidth: 0.5,
    borderRadius: 6,
    width: WIDTH,
    minHeight: WIDTH,
  },
  image: {
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    width: WIDTH,
    height: WIDTH - WIDTH / 6,
  },
});
