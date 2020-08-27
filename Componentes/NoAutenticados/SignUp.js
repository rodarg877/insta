import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro, actionLimpiarImagen, actionCargarImagen } from '../../Store/Acciones';
import SeleccionarImagen from '../SeleccionarImagen';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { blur, change } from 'redux-form';


class SignUp extends React.Component {
  registroDelUsuario = (values) => {
    this.props.registro(values);
  };
  componentDidMount() {
    this.getPermissionAsync();
  };
  componentWillMount() {
    this.props.limpiarImagen();
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} />
        <SignUpForm registro={this.registroDelUsuario} imagen={this.props.imagen.imagen} />
        <Button title='SignIn' onPress={() => { navigation.goBack() }} />
      </View>
    );
  };


  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});
const mapStateToProps = state => ({
  prop: state.prop,
  imagen: state.reducerImageSignUp,
})
const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch(actionRegistro(values));
  },
  cargarImagen: (imagen) => {
    dispatch(actionCargarImagen(imagen));
    dispatch(blur('SignUpForm', 'imagen', Date.now()));
  },
  limpiarImagen: () => dispatch(actionLimpiarImagen())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);