import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { autenticacion } from '../../Store/Servicios/Firebase';

class Profile extends React.Component {
  constructor() {
    super()
    this.state = { nombre: 'instagram-clone' };
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button title='Publicacion' onPress={() => { navigation.navigate('Publicacion') }} />
        <Button title='salir' onPress={() => autenticacion.signOut()} />
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
export default Profile;