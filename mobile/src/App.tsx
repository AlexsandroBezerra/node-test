import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';

import Home from './pages/Home';
import CustomPage from './pages/CustomPage';

const {Navigator, Screen} = createStackNavigator();

function App() {
  useEffect(() => {
    messaging().subscribeToTopic('notification');

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }, []);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#f5f5f5'},
        }}>
        <Screen name="Home" component={Home} />
        <Screen name="CustomPage" component={CustomPage} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
