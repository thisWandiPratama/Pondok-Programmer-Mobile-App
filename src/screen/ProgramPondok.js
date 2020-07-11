import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListProgramPondok} from '../data/ListProgramPondok';
import Navbar from '../components/Navbar';

class ProgramPondok extends React.Component {
  state = {
    data: ListProgramPondok,
  };
  render() {
    return (
      <View style={styles.container}>
        <Navbar name="Program Pondok" />
        <ScrollView style={styles.scrollViewContainer}>
          {this.state.data.map((value, key) => {
            return (
              <View style={styles.boxContent} key={key}>
                <View style={styles.boxText}>
                  <Text style={styles.title}>{value.title}</Text>
                </View>
                <Image
                  source={{
                    uri: value.uri,
                  }}
                  style={styles.imageContent}
                />
                <TouchableNativeFeedback
                  onPress={() =>
                    this.props.navigation.navigate('ProgramPondokContent', {
                      uri: value.uri,
                      title: value.title,
                      content: value.content,
                    })
                  }>
                  <View style={styles.button}>
                    <Text style={styles.textButton}> Baca Selengkapnya</Text>
                    <Icon name="list-alt" size={20} color="white" />
                  </View>
                </TouchableNativeFeedback>
              </View>
            );
          })}
        </ScrollView>
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
export default ProgramPondok;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    flex: 1,
  },
  boxContent: {
    borderColor: 'white',
    elevation: 2,
    marginBottom: 10,
  },
  backButton: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'rgb(0, 184, 150)',
    position: 'absolute',
    zIndex: 1,
    bottom: '8%',
    right: '10%',
    elevation: 2,
  },
  imageContent: {
    height: 150,
    width: '100%',
  },
  boxDirection: {
    flexDirection: 'row',
  },
  boxText: {
    height: 50,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  button: {
    height: 50,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 184, 150)',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 14,
    color: 'white',
    marginRight: 10,
  },
});
