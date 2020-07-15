import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardUtama from '../screen/DashboardUtama';
import DashboardMentor from '../screen/DashboardMentor';
import DashboardSantri from '../screen/Santri/DashboardSantri';
import DompetSaya from '../components/Santri/DS'
import Toko from '../components/Santri/Toko'
import IDCard from '../components/Santri/IDC'
import SOP from '../components/Santri/SOP'
import Kurikulum from '../components/Santri/Kurikulum'
import MateriDasar from '../components/Santri/PMD'
import TugasHarian from '../components/Santri/TH'
import MiniProject from '../components/Santri/MP'
import VideoCheck from '../components/Santri/VC'
import Portofolio from '../components/Santri/Portofolio'
import CatatanPelanggaran from '../components/Santri/CP'
import Raport from '../components/Santri/Raport'
import ImpianSaya from '../components/Santri/IM'
import DetailMateriDasar from '../components/Santri/PMD/detail'
import DetailTugasHarian from '../components/Santri/TH/detail'
import DetailMiniProject from '../components/Santri/MP/detail'
import DetailVideoCheck from '../components/Santri/VC/detail'

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
        <Stack.Screen name="DompetSaya" component={DompetSaya} />
        <Stack.Screen name="Toko" component={Toko} />
        <Stack.Screen name="IDCard" component={IDCard} />
        <Stack.Screen name="SOP" component={SOP} />
        <Stack.Screen name="Kurikulum" component={Kurikulum} />
        <Stack.Screen name="MateriDasar" component={MateriDasar} />
        <Stack.Screen name="TugasHarian" component={TugasHarian} />
        <Stack.Screen name="MiniProject" component={MiniProject} />
        <Stack.Screen name="VideoCheck" component={VideoCheck} />
        <Stack.Screen name="Portofolio" component={Portofolio} />
        <Stack.Screen name="CatatanPelanggaran" component={CatatanPelanggaran} />
        <Stack.Screen name="Raport" component={Raport} />
        <Stack.Screen name="ImpianSaya" component={ImpianSaya} />
        <Stack.Screen name="DetailMateriDasar" component={DetailMateriDasar} />
        <Stack.Screen name="DetailTugasHarian" component={DetailTugasHarian} />
        <Stack.Screen name="DetailMiniProject" component={DetailMiniProject} />
        <Stack.Screen name="DetailVideoCheck" component={DetailVideoCheck} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
