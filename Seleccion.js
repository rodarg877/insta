import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RutasNoAutenticadas from './Componentes/NoAutenticados/RutasNoAutenticadas';
import RutasAutenticadas from './Componentes/Autenticados/RutasAutenticadas';
import { autenticacion } from './Store/Servicios/Firebase';
import { connect } from 'react-redux';
import { actionCerrarSesion, actionEstablecerSesion } from './Store/Acciones';

class Seleccion extends React.Component {
  componentDidMount() {
    this.props.autenticacion();
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas />}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  usuario: state.reducerSesion,
})


const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged((usuario) => {
      if (usuario) {
        dispatch(actionEstablecerSesion(usuario));
      } else {
        dispatch(actionCerrarSesion());
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);