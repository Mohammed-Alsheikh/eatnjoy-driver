import {Parse} from 'parse/react-native';

export const acceptOrder = id => {
  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  query.get(id).then(object => {
    object.set('status', 'accepted');

    object.save();
  });
};

export const rejectOrder = id => {
  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  query.get(id).then(object => {
    object.set('status', 'rejected');

    object.save();
  });
};
