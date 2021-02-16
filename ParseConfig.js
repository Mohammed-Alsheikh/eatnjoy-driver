import AsyncStorage from '@react-native-community/async-storage';
import {Parse} from 'parse/react-native';

const Parse_Url = 'http://64.225.11.1:1337/parse';
const WS_Url = 'ws://64.225.11.1:1337/parse';
const Application_ID = 'myAppId';
const JS_Key = 'KolInJoy';

const Init_Parse = () => {
  Parse.setAsyncStorage(AsyncStorage);
  Parse.initialize(Application_ID, JS_Key, 'master');
  Parse.serverURL = Parse_Url;
  Parse.liveQueryServerURL = WS_Url;
};

export default Init_Parse;

// import AsyncStorage from '@react-native-community/async-storage';
// import {Parse} from 'parse/react-native';

// const Parse_Url = 'https://eatnjoyv1.back4app.io';
// const WS_Url = 'wss://eatnjoy.back4app.io';
// const Application_ID = 'Df2aWM7yYyl6YNdBBizVaZJGUXmwBArhXqzzEiCc';
// const JS_Key = '7tW1wIJPg5bVey1CRbRULm9qRJXYD3OqbraGt5xp';

// // window.fbAsyncInit = function() {
// //   Parse.FacebookUtils.init({
// //     appId: '552461761962929',
// //     cookie: true,
// //     xfbml: true,
// //     version: 'v4.0',
// //   });

// //   // Put here code to run after the Facebook SDK is loaded.
// // };

// const Init_Parse = () => {
//   Parse.setAsyncStorage(AsyncStorage);
//   Parse.initialize(Application_ID, JS_Key);
//   Parse.serverURL = Parse_Url;
//   // Parse.liveQueryServerURL = WS_Url;
// };

// export default Init_Parse;
