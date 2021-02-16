import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import url from 'url';
const {hostname} = url.parse(NativeModules.SourceCode.scriptURL);
// Geting device hostname
const reactotron = Reactotron.configure({
  name: 'EatnJoy-Driver',
  host: hostname,
  port: 9090,
}) // Initial configuration
  .useReactNative({}) // Appling React-Native plugin
  .use(reactotronRedux()) // Appling Redux plugin
  .connect(); // Connect to local client
console.tron = Reactotron.log;
// Extend console with tron for being able to debug to Reactotron

export default reactotron;
