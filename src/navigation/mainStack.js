import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack';

import MapScreen from '../views/screens/Map';

import {ROUTES} from '../constants';

export default createStackNavigator(
  {
    [ROUTES.Map]: {
      screen: MapScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
  },
  {
    initialRouteName: ROUTES.Map,
  },
);
