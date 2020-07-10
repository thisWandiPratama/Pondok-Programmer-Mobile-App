import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import SplashScreen from '../components/SplashScreen';
import BackgroundCarausel from '../components/BackgroundCarausel';
import Icon from 'react-native-vector-icons/FontAwesome';

const images = [
  'https://pbs.twimg.com/media/DMaxb3BUEAEgzi7.jpg',
  'https://paketaninternet.com/wp-content/uploads/2015/06/Promo-XL-Elevenia-Monday-Madness.jpg',
  'https://refrez.com/wp-content/uploads/2019/01/pulsa-tri.png',
];

class DashboardMentor extends React.Component {
  state = {
    boxIcon: [
      {
        iconName: 'university',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Buat SOP',
      },
      {
        iconName: 'pencil',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Buat Materi Pembelajaran',
      },
      {
        iconName: 'tags',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Buat Standar Kompetensi',
      },
      {
        iconName: 'book',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Buat Tugas Harian',
      },
      {
        iconName: 'delicious',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Buat Mini Project',
      },
      {
        iconName: 'play',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Buat Video Check',
      },
      {
        iconName: 'group',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Daftar Santri',
      },
      {
        iconName: 'qrcode',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'QR Scanner',
      },
      {
        iconName: 'sign-out',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Keluar',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashboardTemplate}>
          <BackgroundCarausel images={images} />
          <Text style={styles.dashboardTitle}>DASHBOARD MENTOR</Text>
          <View style={styles.iconTemplates}>
            {this.state.boxIcon.map((value, key) => {
              return (
                <View key={key} style={styles.iconField}>
                  <TouchableOpacity
                    onPress={() => alert(key)}
                    delayPressIn={10}
                    activeOpacity={0.5}>
                    <View style={styles.boxIcon}>
                      <Icon
                        name={value.iconName}
                        size={value.size}
                        color={value.color}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text style={styles.textIcon}>{value.title}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default DashboardMentor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboardTemplate: {
    flex: 1,
  },
  iconTemplates: {
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  iconField: {
    height: 80,
    width: 80,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  boxIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'rgb(0, 184, 150)',
    marginBottom: 3,
  },
  textIcon: {
    textAlign: 'center',
    fontSize: 12,
  },
  dashboardTitle: {
    margin: 5,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 14,
  },
});
