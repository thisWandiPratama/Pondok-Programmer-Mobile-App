import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
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
import ProfilePondok from '../screen/ProfilePondok';
import ProgramPondok from '../screen/ProgramPondok';
import ProgramPondokContent from '../screen/ProgramPondokContent';
import Register from '../screen/Register';
import Login from '../screen/Login';
import BuatSOP from '../screen/BuatSOP';
import BuatMateriPembelajaran from '../screen/BuatMateriPembelajaran';
import BuatStandarKompetensi from '../screen/BuatStandarKompetensi';
import BuatTugasHarian from '../screen/BuatTugasHarian';
import BuatMiniProject from '../screen/BuatMiniProject';
import BuatVideoCheck from '../screen/BuatVideoCheck';
import DaftarSantri from '../screen/DaftarSantri';
import QRScanner from '../screen/QRScanner';
import BuatMateriPembelajaranCreate from '../screen/BuatMateriPembelajaranCreate';
import BuatKurikulum from '../screen/BuatKurikulum';

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
        <Stack.Screen name="ProfilePondok" component={ProfilePondok} />
        <Stack.Screen name="ProgramPondok" component={ProgramPondok} />
        <Stack.Screen
          name="ProgramPondokContent"
          component={ProgramPondokContent}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BuatSOP" component={BuatSOP} />
        <Stack.Screen
          name="BuatMateriPembelajaran"
          component={BuatMateriPembelajaran}
        />
        <Stack.Screen name="BuatKurikulum" component={BuatKurikulum} />
        <Stack.Screen
          name="BuatMateriPembelajaranCreate"
          component={BuatMateriPembelajaranCreate}
        />
        <Stack.Screen
          name="BuatStandarKompetensi"
          component={BuatStandarKompetensi}
        />
        <Stack.Screen name="BuatTugasHarian" component={BuatTugasHarian} />
        <Stack.Screen name="BuatMiniProject" component={BuatMiniProject} />
        <Stack.Screen name="BuatVideoCheck" component={BuatVideoCheck} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="DaftarSantri" component={DaftarSantri} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
