import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const fetchOrders = async () => {
  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  query.equalTo('status', 'pending');

  return query.find();
};
