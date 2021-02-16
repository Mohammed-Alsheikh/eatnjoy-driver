import {Parse} from 'parse/react-native';
import reactotron from 'reactotron-react-native';

export const createMeal = async (
  name,
  desc,
  enoughFor,
  prepTime,
  price,
  image,
  menu,
) => {
  const Meal = Parse.Object.extend('Meal');
  const myNewObject = new Meal();

  myNewObject.set('name', name);
  myNewObject.set('description', desc);
  myNewObject.set('enoughFor', enoughFor);
  myNewObject.set('prepTime', prepTime);
  myNewObject.set('price', price);

  myNewObject.set(
    'image',
    new Parse.File(image.fileName, {base64: image.data}),
  );

  const newMeal = await myNewObject.save();
  const final = await menu
    .relation('meals')
    .add(newMeal)
    .save();

  reactotron.log(final);
};

export const getTypes = async () => {
  const Menu = Parse.Object.extend('Menu');
  const query = new Parse.Query(Menu);

  return query.find();
};
