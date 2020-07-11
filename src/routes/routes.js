import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashboardUtama from '../screen/DashboardUtama';
import DashboardMentor from '../screen/DashboardMentor';
import DashboardSantri from '../screen/Santri/DashboardSantri';
import ProfilePondok from '../screen/ProfilePondok';
import ProgramPondok from '../screen/ProgramPondok';
import ProgramPondokContent from '../screen/ProgramPondokContent';
import Register from '../screen/Register';
import Login from '../screen/Login';

const Stack = createStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="DashboardUtama" component={DashboardUtama} />
        <Stack.Screen name="DashboardMentor" component={DashboardMentor} />
        <Stack.Screen name="DashboardSantri" component={DashboardSantri} />
        <Stack.Screen name="ProfilePondok" component={ProfilePondok} />
        <Stack.Screen name="ProgramPondok" component={ProgramPondok} />
        <Stack.Screen
          name="ProgramPondokContent"
          component={ProgramPondokContent}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
