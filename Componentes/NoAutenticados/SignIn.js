import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignInForm from './Formas/SignInForm';
import { actionLogin } from '../../Store/ACCIONES';
import { connect } from 'react-redux';

class SignIn extends React.Component {
  signinDelUsuario = (values) => {
    this.props.login(values);
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.signinDelUsuario} />
        <Button title='SignUp' onPress={() => { navigation.navigate('SignUp') }} />
      </View>
    );
  };
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
  prop:state.prop,
})
const mapDispatchToProps = dispatch =>( {
      login: (datos) => {
          dispatch(actionLogin(datos));
      },
  });
  export default connect(mapStateToProps, mapDispatchToProps) (SignIn);