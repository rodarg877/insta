import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Add extends React.Component {
  constructor() {
    super()
    this.state = { nombre: 'instagram-clone' };
  };
  render() {
    return (
      <View style={styles.container}>
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
export default Add;