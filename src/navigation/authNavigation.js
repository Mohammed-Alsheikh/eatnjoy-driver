import 'react-native-gesture-handler';
import {createSwitchNavigator} from 'react-navigation';
import Auth from '../views/screens/Auth';
import App from './appNavigation';
import {ROUTES} from '../constants';

const AuthSwitch = createSwitchNavigator(
  {
    [ROUTES.App]: {screen: App},
    [ROUTES.Auth]: {screen: Auth},
  },
  {
    initialRouteName: ROUTES.Auth,
  },
);

export default AuthSwitch;
