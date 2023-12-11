import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import OtherPage from './OtherPage';
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="SecondPage" component={SecondPage} />
        </Stack.Group>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtherPage" component={OtherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
