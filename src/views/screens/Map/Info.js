/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {Text, Title, Paragraph, List, Divider} from 'react-native-paper';
import Colors from '../../styles';

const textStyle = {
  color: Colors.primary,
  fontSize: 16,
  height: 22,
  flex: 1,
};

export default ({addressInfo}) => {
  return (
    <Container>
      <Title
        style={{alignSelf: 'center', color: Colors.primary, marginBottom: 12}}>
        {'Client Info'}
      </Title>
      <Divider />
      <List.Item
        title="Area"
        description={addressInfo.area}
        left={props => (
          <List.Icon {...props} icon="map" color={Colors.primary} />
        )}
      />
      <Divider />
      <List.Item
        title="Street"
        description={addressInfo.street}
        left={props => (
          <List.Icon {...props} icon="directions" color={Colors.primary} />
        )}
      />
      <Divider />
      <List.Item
        title="Building"
        description={addressInfo.building}
        left={props => (
          <List.Icon {...props} icon="home" color={Colors.primary} />
        )}
      />
      <Divider />
      <List.Item
        title="Floor"
        description={addressInfo.floor}
        left={props => (
          <List.Icon {...props} icon="check-circle" color={Colors.primary} />
        )}
      />
      <Divider />
      <List.Item
        title="Phone"
        description={addressInfo.phone}
        left={props => (
          <List.Icon {...props} icon="phone" color={Colors.primary} />
        )}
      />
      <Divider />
      <List.Item
        title="Appartment"
        description={addressInfo.appartment}
        left={props => (
          <List.Icon {...props} icon="send" color={Colors.primary} />
        )}
      />
      <Divider />

      {addressInfo.additional ? (
        <React.Fragment>
          <Divider />
          <List.Item
            title="Additional"
            description={addressInfo.additional}
            left={props => (
              <List.Icon {...props} icon="label" color={Colors.primary} />
            )}
          />
          <Divider />
        </React.Fragment>
      ) : null}
    </Container>
  );
};

const Container = styled.View`
  padding: 6px 24px 0px 24px;
  background-color: rgba(55, 55, 55, 0.12);
`;

const Row = styled.View`
  flex-direction: row;
  align-self: stretch;
`;
