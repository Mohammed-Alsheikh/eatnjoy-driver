import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

const User = new Parse.User();

export const checkDriver = async (
  checked,
  currentLocation,
  setRequest,
  notify,
) => {
  const user = await Parse.User.currentAsync();
  const query = new Parse.Query(User);

  if (user.get('location')) {
    if (checked === true) {
      await watchOrder(user, setRequest, notify);
    } else {
      Parse.LiveQuery.close();
    }

    query.get(user.id).then(userObj => {
      userObj.set('type', checked ? 'driver-a' : 'driver-o');
      userObj
        .save()
        .then(response => {})
        .catch(error => {});
    });
  } else {
    const Location = Parse.Object.extend('Location');
    const newLocation = new Location();

    newLocation.set('coords', {
      lat: currentLocation.latitude,
      lng: currentLocation.longitude,
    });

    newLocation.set('user', {
      __type: 'Pointer',
      className: '_User',
      objectId: user.id,
    });

    newLocation.save().then(
      result => {
        query.get(user.id).then(user => {
          user.set('type', checked ? 'driver-a' : 'driver-o');
          user.set('location', {
            __type: 'Pointer',
            className: 'Location',
            objectId: result.id,
          });
          user
            .save()
            .then(response => {
              checkDriver();
              reactotron.log(response);
            })
            .catch(error => {});
        });
      },
      error => {},
    );
  }
};

export const getLoactionObj = async () => {
  const user = await Parse.User.currentAsync();
  const Location = Parse.Object.extend('Location');
  const query = new Parse.Query(Location);

  return query.get(user.get('location').id);
};

export const setLocationWatchStatus = async status => {
  const user = await Parse.User.currentAsync();
  const Location = Parse.Object.extend('Location');
  const query = new Parse.Query(Location);

  const obj = await query.get(user.get('location').id);
  obj.set('watch', status);

  await obj.save();
};

export const setDriverStatus = async (user, status) => {
  const query = new Parse.Query(User);
  const userObj = await query.get(user.id);
  userObj.set('type', status);
  await userObj.save();
};

export const updateLocation = async (position, object) => {
  object.set('coords', {
    lat: position.latitude,
    lng: position.longitude,
  });

  await object.save();
};

export const watchOrder = (user, setRequest, notify) => {
  const Order = Parse.Object.extend('Order');
  const query = new Parse.Query(Order);

  query.equalTo('driver', {
    __type: 'Pointer',
    className: '_User',
    objectId: user.id,
  });

  query
    .subscribe()
    .then(subscription => {
      reactotron.log(subscription);
      subscription.on('update', object => {
        reactotron.logImportant('update', object);
        if (String(object.get('status')) === 'done') {
          setLocationWatchStatus(false); // setting watch status
          setRequest(undefined);
        } else {
          setRequest({
            createdAt: object.createdAt,
            addressInfo: object.get('addressInfo'),
            location: object.get('location'),
            status: object.get('status'),
            prepTime: object.get('prepTime'),
            items: object.get('items'),
            client: object.get('client'),
            price: object.get('price'),
            id: object.id,
          });
        }
      });

      subscription.on('open', () => {
        reactotron.logImportant('subscription opened');
      });

      subscription.on('create', async object => {
        reactotron.logImportant('create', object);
      });

      subscription.on('enter', object => {
        reactotron.logImportant('object entered');

        setLocationWatchStatus(true); // setting watch status

        setDriverStatus(user, 'driver-n');
        notify(object.get('prepTime'));
        setRequest({
          createdAt: object.createdAt,
          addressInfo: object.get('addressInfo'),
          location: object.get('location'),
          status: object.get('status'),
          prepTime: object.get('prepTime'),
          items: object.get('items'),
          client: object.get('client'),
          price: object.get('price'),
          id: object.id,
        });
      });

      subscription.on('leave', object => {
        reactotron.logImportant('object left');
      });

      subscription.on('delete', object => {
        reactotron.logImportant('object deleted');
      });

      subscription.on('close', () => {
        reactotron.logImportant('subscription closed');
      });
    })
    .catch(err => {
      reactotron.logImportant(err);
    });
};

export const sendMessage = async (id, message) => {
  const Message = Parse.Object.extend('Message');
  const newMessage = new Message();

  newMessage.set('sender', 'driver');
  newMessage.set('text', message);
  newMessage.set('request', {
    __type: 'Pointer',
    className: 'DelivaryRequest',
    objectId: id,
  });

  const response = await newMessage.save();
  reactotron.log({response});
};

export const watchChat = async (id, setMessages) => {
  const Message = Parse.Object.extend('Message');
  const query = new Parse.Query(Message);

  query.equalTo('request', {
    __type: 'Pointer',
    className: 'DelivaryRequest',
    objectId: id,
  });

  return query
    .subscribe()
    .then(subscription => {
      reactotron.log(subscription);
      subscription.on('update', object => {
        reactotron.logImportant(object);
      });

      subscription.on('open', () => {
        reactotron.logImportant('subscription opened');
      });

      subscription.on('create', async object => {
        reactotron.logImportant('create', object);

        setMessages(object);
      });
    })
    .catch(err => {
      reactotron.logImportant(err);
    });
};
