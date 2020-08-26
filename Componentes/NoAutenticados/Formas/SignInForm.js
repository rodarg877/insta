import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImagePropTypes } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
    return (
        <View style={styles.textInput}>
            <TextInput
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.name === 'correo' ? 'email-address' : 'default'}
                autoCapitalize='none'
                secureTextEntry={!!(props.name === 'password')}
                onBlur={props.input.onBlur}
            />
            <View style={styles.linea} />
            {props.meta.touched && props.meta.error && <Text style={styles.errors}>{props.meta.error}</Text>}
        </View>
    )
};


const validate = (values) => {
    const errors = {};
    if (!values.correo) {
        errors.correo = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
        errors.correo = ' Correo invalido';
    }
    if (!values.password) {
        errors.password = 'requerido';
    } else if (values.password.length < 5) {
        errors.password = 'deben ser al menos 5 caracteres';
    } else if (values.password.length > 15) {
        errors.password = 'deben ser menos de 15 caracteres';
    }
    return errors;
}


const SignInForm = (props) => {
    return (
        <View>
            <Field name="correo" component={fieldNombre} ph="Correo@correo.com" />
            <Field name="password" component={fieldNombre} ph="*******" />
            <Button title="Login" onPress={props.handleSubmit(props.login)} />
        </View>
    );
};
const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16,
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 2,
    },
    errors: {
        color: '#FF0000',
    }
})
export default reduxForm({ form: 'SignInForm', validate })(SignInForm); 