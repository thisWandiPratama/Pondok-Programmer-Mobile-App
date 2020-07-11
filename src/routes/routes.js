import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardUtama from '../screen/DashboardUtama';
import DashboardMentor from '../screen/DashboardMentor';
import DashboardSantri from '../screen/Santri/DashboardSantri';

const Stack = createStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="DashboardUtama" component={DashboardUtama} />
        <Stack.Screen name="DashboardMentor" component={DashboardMentor} />
        <Stack.Screen name="DashboardSantri" component={DashboardSantri} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
