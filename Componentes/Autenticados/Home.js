import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends React.Component {
  constructor(){
  super()
  this.state = { nombre: 'instagram-clone' };
};
render(){
  const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <Button title= 'Autor' onPress= {()=>{navigation.navigate('Autor')}}  />
      <Button title= 'Comentarios' onPress= {()=>{navigation.navigate('Comentarios ')}}  />
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
export default Home;