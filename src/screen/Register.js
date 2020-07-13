import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../components/BackButton';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    no_tlp: '',
    password: '',
    code: '',
    picker: '',
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
        <Text style={styles.title}>Registrasi</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nama lengkap"
          placeholderTextColor="grey"
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.textInput}
          placeholder="No Telepon"
          onChangeText={(text) => this.setState({no_tlp: text})}
          value={this.state.no_tlp}
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
        <TextInput
          style={styles.textInput}
          placeholder="Kode"
          onChangeText={(text) => this.setState({code: text})}
          value={this.state.code}
          placeholderTextColor="grey"
        />
        <View style={styles.boxTextInput}>
          <Picker
            selectedValue={this.state.picker}
            style={styles.picker}
            mode="dropdown"
            prompt="Options"
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue != '0') {
                this.setState({picker: itemValue});
              }
            }}>
            <Picker.Item label="Pilih Divisi" value="0" />
            <Picker.Item label="Backend" value="backend" />
            <Picker.Item label="Frontend" value="frontend" />
            <Picker.Item label="Mobile(Java)" value="mobile-java" />
            <Picker.Item
              label="Mobile(React Native)"
              value="mobile-react-native"
            />
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          delayPressIn={10}>
          <Text style={styles.textButton}>Daftar Anggota</Text>
        </TouchableOpacity>
        <BackButton params={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
export default Register;

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
  picker: {
    height: 40,
    width: '100%',
    color: 'grey',
  },
});
