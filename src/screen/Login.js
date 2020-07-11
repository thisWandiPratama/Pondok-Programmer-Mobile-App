import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    secureText: true,
  };
  seePassword = () => {
    if (this.state.secureText) {
      return (
        <Text onPress={() => this.setState({secureText: false})}>Lihat</Text>
      );
    } else {
      return (
        <Text onPress={() => this.setState({secureText: true})}>Kunci</Text>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Masuk</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholderTextColor="grey"
        />
        <View style={styles.boxTextInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Kata Sandi"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            placeholderTextColor="grey"
            secureTextEntry={this.state.secureText}
          />
          {this.seePassword()}
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          delayPressIn={10}>
          <Text style={styles.textButton}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.backButton}
          delayPressIn={10}
          onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-left" size={35} color="white" />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(0,184,150)',
    margin: 30,
  },
  textInput: {
    height: 40,
    width: '80%',
    borderBottomWidth: 1,
    borderColor: 'rgb(0,184,150)',
  },
  boxTextInput: {
    height: 40,
    width: '80%',
    borderBottomWidth: 1,
    borderColor: 'rgb(0,184,150)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: '80%',
    fontSize: 16,
    borderRadius: 3,
    padding: 10,
    backgroundColor: 'rgb(0,184,150)',
    marginTop: '15%',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'rgb(0, 184, 150)',
    position: 'absolute',
    zIndex: 9,
    bottom: '8%',
    right: '10%',
    elevation: 2,
  },
});
