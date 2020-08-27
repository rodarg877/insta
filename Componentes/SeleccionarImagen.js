import * as React from 'react';
import {  Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SeleccionarImagen=(props) =>{
 const   seleccionarImagen = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        props.cargar(result);
      }

    } catch (E) {
      console.log(E);
    }
  };
  return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={seleccionarImagen}>
          {
            props.imagen ?
              <Image source={{uri: props.imagen.uri }}
                style={{ width: 160, height: 160, borderRadius: 80 }}
              /> :
              <Image source={require('../assets/foto.jpg')}
                style={{ width: 160, height: 160, borderRadius: 80 }}
              />
          }
        </TouchableOpacity>
      </View>
    );
  }
  export default SeleccionarImagen;

  

  
