import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const acceptOrder = (id, driver, time) => {
  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  reactotron.log(driver);
  query.get(id).then(object => {
    object.set('status', 'kitchen');
    object.set('prepTime', Number(time));
    object.set('driver', {
      __type: 'Pointer',
      className: '_User',
      objectId: driver.id,
    });

    object.save();
  });
};

export const getDrivers = () => {
  const User = new Parse.User();
  const a = new Parse.Query(User);
  const n = new Parse.Query(User);

  a.equalTo('type', 'driver-a');
  n.equalTo('type', 'driver-n');

  const query = Parse.Query.or(a, n);

  return query.find();
};
