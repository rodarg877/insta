import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Publicacion extends React.Component {
  constructor(){
  super()
  this.state = { nombre: 'instagram-clone' };
};
render(){
  const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Button title= 'Comentarios' onPress= {()=>{navigation.navigate('Comentarios ')}}  />
      <Button title= 'Autor' onPress= {()=>{navigation.navigate('Autor')}}  />
    </View>
  );
};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
});
export default Publicacion;