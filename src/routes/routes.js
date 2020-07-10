import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardUtama from '../screen/DashboardUtama';
import Setting from '../screen/Setting';

const Stack = createStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DashboardUtama} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
