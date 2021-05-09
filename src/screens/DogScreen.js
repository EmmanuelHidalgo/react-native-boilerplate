import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchDogScreen from './Demos/SearchDogScreen';
import AllDogsScreen from './Demos/AllDogsScreen';
import { DogProvider } from '../context/dogContext';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <DogProvider>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchDogScreen} />
        <Stack.Screen name="AllDogs" component={AllDogsScreen} />
      </Stack.Navigator>
    </DogProvider>
  );
}

export default MyStack;