import {Parse} from 'parse/react-native';

export const acceptOrder = async orderId => {
  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  const object = await query.get(orderId);

  object.set('status', 'delivery');

  await object.save();
};
