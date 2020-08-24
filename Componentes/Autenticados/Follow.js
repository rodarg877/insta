import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Follow extends React.Component {
render(){
  const { navigation}= this.props;
  return (
    <View style={styles.container}>
      <Button title='Autor' onPress={()=>{navigation.navigate('Autor')}} />
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
export default Follow;