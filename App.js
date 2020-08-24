import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from  './Store/Store';
import Seleccion from './Seleccion';



class App extends React.Component {
  constructor() {
    super()
    this.state = { nombre: 'instagram-clone' };
  };
  render() {
    return (
      <View style={styles.container}>
        <Provider store= {Store}>
          <Seleccion/>
        </Provider>
        <StatusBar style="auto" />
      </View>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App