import {Parse} from 'parse/react-native';

const User = new Parse.User();

export const changeStatus = async status => {
  const user = await Parse.User.currentAsync();
  const query = new Parse.Query(User);

  query.get(user.id).then(userObj => {
    userObj.set('type', status);
    userObj
      .save()
      .then(response => {})
      .catch(error => {});
  });
};
