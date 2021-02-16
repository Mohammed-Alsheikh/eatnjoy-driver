import React from 'react';
import styled from 'styled-components';
import {Text, Title, Paragraph} from 'react-native-paper';
import Colors from '../../styles';
import moment from 'moment/src/moment';

export default ({item, onPress}) => {
  const name = item.get('client').get('username');
  const since = moment(item.createdAt).fromNow();
  const price = item.get('price');
  const orderId = item.id;

  return (
    <Container onPress={onPress}>
      <Col>
        <Text style={{fontSize: 18}}>{`Name: ${name}`}</Text>
        <Paragraph>{`Ordered: ${since}`}</Paragraph>
      </Col>
      <Col>
        <Text style={{color: Colors.primary}}>{`Price: ${price} QT`}</Text>
        <Paragraph>{`Order ID: ${orderId}`}</Paragraph>
      </Col>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  align-self: stretch;
  flex-direction: row;
  background-color: rgba(51, 51, 51, 0.1);
  justify-content: space-between;
  padding: 12px 24px 12px 24px;
  margin-bottom: 6px;
  margin-top: 6px;
  border-color: #000;
`;

const Col = styled.View`
  flex: 1;
  justify-content: center;
`;
