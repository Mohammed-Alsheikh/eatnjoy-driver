import React from 'react';
import styled from 'styled-components/native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Title, Text} from 'react-native-paper';
import reactotron from 'reactotron-react-native';
import Colors from '../../views/styles';

const LOGO = require('../../assets/logo.png');

export default props => {
  const {user} = props;

  return (
    <Container>
      <Header>
        <Logo source={LOGO} resizeMethod="resize" resizeMode="contain" />
        <Title
          style={{
            color: 'white',
            alignSelf: 'flex-start',
            marginHorizontal: 12,
          }}>
          {user.username || user.get('username') || ''}
        </Title>
      </Header>
      <DrawerNavigatorItems {...props} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View`
  align-self: stretch;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primary};
`;

const Logo = styled.Image`
  width: 160px;
  height: 160px;
`;
