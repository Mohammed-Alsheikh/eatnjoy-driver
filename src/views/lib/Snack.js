import React from 'react';
import {Snackbar, Text} from 'react-native-paper';

export default ({visible, onDismiss, children}) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      style={{backgroundColor: '#fff'}}>
      <Text>{children}</Text>
    </Snackbar>
  );
};
