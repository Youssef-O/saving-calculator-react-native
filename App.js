import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions= {{
          headerStyle: {backgroundColor: '#313131'},
          headerTintColor: '#FFFFFF',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Savings Calculator',
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={({route}) => ({title: route.params.itemName})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}