import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboardTemplate: {
    flex: 1,
  },
  iconTemplates: {
    flex:1,
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
    marginBottom : 10
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