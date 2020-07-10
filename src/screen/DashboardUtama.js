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

class DashboardUtama extends React.Component {
  state = {
    splash: true,
    boxIcon: [
      {
        iconName: 'home',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Profile  Pondok',
      },
      {
        iconName: 'slack',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Program Pondok',
      },
      {
        iconName: 'sign-in',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Masuk',
      },
      {
        iconName: 'pencil-square-o',
        size: 30,
        color: 'rgb(0,184,150)',
        title: 'Daftar',
      },
    ],
  };
  componentDidMount() {
    this.timeOutSplash();
  }
  timeOutSplash = () => {
    setTimeout(() => {
      this.setState({splash: false});
    }, 4000);
  };
  splashScreen = () => {
    const {splash} = this.state;
    if (splash) {
      return <SplashScreen />;
    }
  };

  changeScreen = (index) => {
    switch (index) {
      case 2:
        this.props.navigation.navigate('DashboardMentor');
        break;
      default:
        alert('lainnya');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.splashScreen()}
        <View style={styles.dashboardTemplate}>
          <BackgroundCarausel images={images} />
          <Text style={styles.dashboardTitle}>DASHBOARD</Text>
          <View style={styles.iconTemplates}>
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

export default DashboardUtama;

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
    //marginTop:10
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
