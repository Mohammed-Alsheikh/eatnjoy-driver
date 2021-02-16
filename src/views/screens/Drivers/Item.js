import React from 'react';
import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import {Title, Text} from 'react-native-paper';
import Colors from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({item, onPress, selected}) => {
  const available = item.get('type') === 'driver-a' ? true : false;

  return (
    <Container
      onPress={() => (available ? onPress() : {})}
      selected={selected?.get('username') === item.get('username')}>
      <Section>
        <Row>
          <Title style={{fontSize: 16}}>{'Name: '}</Title>
          <Text>{item.get('username')}</Text>
        </Row>
      </Section>
      <Section style={{alignItems: 'flex-end'}}>
        <Row>
          <Title style={{fontSize: 16}}>{'Availability: '}</Title>
          <Icon
            name="lens"
            style={{
              fontSize: 18,
              color: available ? 'lime' : 'red',
              marginTop: 4,
            }}
          />
        </Row>
      </Section>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: grey;
  margin: 8px 0px 8px 0px;
  background-color: ${({selected}) =>
    selected ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.07)'};
  flex-direction: row;
  align-self: stretch;
`;

const Section = styled.View`
  padding: 12px 12px 12px 12px;
  flex: 1;
`;

const Row = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;
