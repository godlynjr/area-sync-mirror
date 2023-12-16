import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtherPage from './OtherPage';
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import Email from './Email'
import Password from './Password'
import Profil from './Profil'
import Edit_profil from './Edit_profil'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="SecondPage" component={SecondPage} />
        </Stack.Group>
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="OtherPage" component={OtherPage} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Edit_profil" component={Edit_profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
