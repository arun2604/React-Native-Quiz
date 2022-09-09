import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOption>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} options={{headerShow:false}}/>
        <Stack.Screen name="Quz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default MyStack
