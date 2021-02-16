import {useState} from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  const onShow = () => setVisible(true);
  const onDismiss = () => setVisible(false);

  return {
    visible,
    message,
    onShow,
    onDismiss,
    setMessage: msg => setMessage(msg),
  };
};
