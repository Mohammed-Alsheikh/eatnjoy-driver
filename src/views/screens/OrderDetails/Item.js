/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {StyleSheet, Image} from 'react-native';
import {Title, Text} from 'react-native-paper';
import Colors from '../../styles';
import reactotron from 'reactotron-react-native';

export default ({item}) => {
  const [meal, setMeal] = useState(null);

  const quantity = item.get('quantity');

  useEffect(() => {
    const res = item.get('meal');
    res.fetch();
    setMeal(res);
  }, [item]);

  if (!meal) {
    return null;
  }

  return (
    <Container>
      <Image
        source={{uri: meal?.get('image')?.url()}}
        resizeMethod="resize"
        resizeMode="cover"
        style={{
          width: 72,
          height: 72,
          borderRadius: 8,
          alignSelf: 'center',
          margin: 12,
        }}
      />
      <Section>
        <Row>
          <Title style={{fontSize: 16}}>{'Name: '}</Title>
          <Text>{meal.get('name')}</Text>
        </Row>
        <Row>
          <Title style={{fontSize: 16}}>{'Price: '}</Title>
          <Title
            style={{
              fontSize: 16,
              color: Colors.primary,
            }}>{`${meal.get('price')} QT`}</Title>
        </Row>
      </Section>
      <Section style={{alignItems: 'flex-start'}}>
        <Row>
          <Text>{'Quantity: '}</Text>
          <Text style={{color: Colors.primary}}>{quantity}</Text>
        </Row>
        <Row>
          <Text>{'Total: '}</Text>
          <Text style={{color: Colors.primary}}>
            {meal.get('price') * quantity}
          </Text>
        </Row>
      </Section>
    </Container>
  );
};

const Container = styled.View`
  /* border-bottom-width: ${StyleSheet.hairlineWidth}; */
  /* border-bottom-color: grey; */
  margin: 0px 0px 12px 0px;
  flex-direction: row;
  align-self: stretch;
  background-color: rgba(52, 52, 52, 0.1);
`;

const Section = styled.View`
  padding: 12px 24px 12px 24px;
  flex: 1;
`;

const Row = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;
