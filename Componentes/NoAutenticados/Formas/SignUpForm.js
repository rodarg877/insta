import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImagePropTypes } from 'react-native';
import {Field, reduxForm} from 'redux-form';

const fieldNombre = (props) => {
<View style={styles.textInput}>
<TextInput
 placeholder={props.ph} 
 onChangeText = { props.input.onChange} 
 value= {props.input.value}
keyboardType = {props.name === 'correo' ? 'email-address' : 'default' }
autoCapitalize= 'none'
secureTextEntry = {!!(props.name === 'password' || props.name === 'confirmacion') }
onBlur= {props.input.onBlur}
 />
 <View style={styles.linea}></View>
 {props.meta.touched && props.meta.error && <Text style= {styles.errors}>{ props.meta.error }</Text>}
 </View>
 };


 const validate = (values)=>{
    const errors = {};
    if (!values.nombre) {
        errors.nombre = 'requerido';
    } else if (values.nombre.length < 5){
        errors.nombre = 'deben ser al menos 5 caracteres';
    }else if (values.nombre.length > 10){
        errors.nombre = 'deben ser menos de 10 caracteres';
    };
    if(!values.correo){
        errors.correo = 'requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
        errors.correo = ' Correo invalido';
    }
if(!values.password){
    errors.password = 'requerido';
} else if (values.password.length < 5){
    errors.nombre = 'deben ser al menos 5 caracteres';
}else if (values.password.length > 15){
    errors.nombre = 'deben ser menos de 15 caracteres';
}
if(!values.confirmacion){
    errors.confirmacion = 'requerido';
 }else if (values.password !== values.confirmacion){
     errors.confirmacion='el password debe coincidir'
 }
 }

const styles = StyleSheet.create({
    container:{
        flex:3,
    },
    textInput: {
        marginBottom: 16,
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 2,
    },
errors:{
    color: '#FF0000',
}
})
const SignUpForm = (props) => {
    return(
        <View style={styles.container}>
            <Field name= "nombre" component={fieldNombre} ph="Nombre"/>
            <Field name= "correo" component={fieldNombre}  ph="Correo@correo.com"/>
            <Field name= "password" component={fieldNombre}  ph="*******" />
            <Field name= "confirmacion" component={fieldNombre} ph="****"/>
                <Button title="Registrar" onPress={props.handleSubmit(props.registro,)} />
        </View>
    );
};
export default reduxForm({form:'SignUpForm', validate,})(SignUpForm); 