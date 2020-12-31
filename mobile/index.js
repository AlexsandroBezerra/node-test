import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setAutoInitEnabled(true);

AppRegistry.registerComponent(appName, () => App);
