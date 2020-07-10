import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SplashScreen from '../components/splashScreen';

class DashboardUtama extends React.Component {
  state = {
    splash: true,
  };
  componentDidMount() {
    this.timeOutSplash();
  }
  componentWillUnmount() {
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
  render() {
    return (
      <View style={styles.container}>
        {this.splashScreen()}
        <View>
          <Text>nama</Text>
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
});
