import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mergedStacks} from '../navigation/ScreenCollections'
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={() => ({
        headerShown: false,
    })}
    initialRouteName='AuthVerifactionScreen'
    >
      {mergedStacks.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;
