import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Navbar from '../components/Navbar';

class ProgramPondokContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar name="Detail Program" />
        <ScrollView style={styles.container}>
          <Image
            source={{
              uri: this.props.route.params.uri,
            }}
            style={styles.imageContent}
          />
          <View style={styles.boxContent}>
            <Text style={styles.title}>{this.props.route.params.title}</Text>
            <Text>{this.props.route.params.content}</Text>
          </View>
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
export default ProgramPondokContent;

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
  },
  imageContent: {
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  boxContent: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
