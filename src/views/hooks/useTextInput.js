import {useState} from 'react';

export default initialState => {
  const [value, setValue] = useState(initialState);
  const onChangeText = val => setValue(val);

  return {
    value,
    onChangeText,
  };
};
