import React from 'react';
import { StyleSheet, Text, View, Button, ProgressViewIOSComponent } from 'react-native';

class Search extends React.Component {
  constructor(){
  super()
  this.state = { nombre: 'instagram-clone' };
};
render(){
  const {navigation} = this.props;
  return (
    <View style={styles.container}>
      <Button title = 'Publicacion' onPress={ () =>{navigation.navigate("Publicacion")}}/>
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
export default Search;