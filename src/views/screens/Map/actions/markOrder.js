import {Parse} from 'parse/react-native';

export const markOrder = async orderId => {
  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  const object = await query.get(orderId);

  object.set('status', 'done');

  await object.save();
};
