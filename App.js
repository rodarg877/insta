import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Seleccion from './Seleccion';
import store from './Store/Store';



class App extends React.Component {
  constructor() {
    super()
    this.state = { nombre: 'instagram-clone' };
  };
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Seleccion />
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