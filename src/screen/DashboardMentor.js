import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  changeScreen = (index) => {
    switch (index) {
      case 8:
        this.props.navigation.navigate('DashboardUtama');
        break;
      default:
        alert('lainnya');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashboardTemplate}>
          <Image
            source={require('../assets/images/banner.png')}
            style={styles.banner}
          />
          <View style={styles.iconTemplates}>
            <View style={styles.dashboardTitleBox}>
              <Text style={styles.dashboardTitle}>DASHBOARD MENTOR</Text>
            </View>
            {this.state.boxIcon.map((value, key) => {
              return (
                <View key={key} style={styles.iconField}>
                  <TouchableOpacity
                    onPress={() => this.changeScreen(key)}
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
    backgroundColor: 'rgb(237, 237, 235)',
  },
  dashboardTemplate: {
    flex: 1,
  },
  iconTemplates: {
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginTop: 15,
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
  dashboardTitleBox: {
    width: '100%',
  },
  dashboardTitle: {
    margin: 5,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 14,
  },
  banner: {
    height: '30%',
    width: '100%',
  },
});
