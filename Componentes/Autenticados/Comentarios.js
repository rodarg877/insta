import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Comentarios extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  render() {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Button title='Autor' onPress={() => { navigation.navigate('Autor') }} />
      </View>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Comentarios;