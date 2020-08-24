import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {connect }from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro } from '../../Store/ACCIONES';


class SignUp extends React.Component {
   registroDelUsuario= (values) => {
    this.props.registro(values);
  }
render(){
  const { navigation}= this.props;
  return (
    <View style={styles.container}>
      <SignUpForm registro= { this.registroDelUsuario}/>
      <Button title='SignUp' onPress={()=>{navigation.goBack()}} />
    </View>
  );
};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    paddingHorizontal: 16,
  },
});
const mapStateToProps = state => ({
    prop:state.prop,
})
const mapDispatchToProps = dispatch =>( {
        registro: (values) => {
            dispatch(actionRegistro());
        },
    });

export default connect(mapStateToProps, mapDispatchToProps) (SignUp);