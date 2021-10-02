import React, {useState} from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Formulario = ({busqueda, setBusqueda, guardarConsultar}) => {
  const {pais} = busqueda;
  const [animacionBtn] = useState(new Animated.Value(1));

  const consultarPais = () => {
    if (pais.trim() === '') {
      mostrarAlerta();
      return;
    }

    guardarConsultar(true);
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Debe seleccionar un país', [{text: 'Entendido'}]);
  };

  const animacionEntrada = () => {
    Animated.spring(animacionBtn, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const animacionSalida = () => {
    Animated.spring(animacionBtn, {
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };

  const estiloAnimacion = {
    transform: [
      {
        scale: 1,
      },
    ],
  };

  return (
    <>
      <View>
        <Text style={styles.input}>País</Text>
      </View>
      <View>
        <Picker
          style={styles.itemPais}
          selectedValue={pais}
          onValueChange={pais => setBusqueda({...busqueda, pais})}>
          <Picker.Item label="--Seleccione un país" value="" />
          <Picker.Item label="Canadá" value="ca" />
          <Picker.Item label="El Salvador" value="sv" />
          <Picker.Item label="Guatemala" value="gt" />
          <Picker.Item label="Honduras" value="hn" />
          <Picker.Item label="Nicaragua" value="ni" />
          <Picker.Item label="Panama" value="pa" />
          <Picker.Item label="Costa Rica" value="cr" />
          <Picker.Item label="Mexico" value="mex" />
          <Picker.Item label="Argentina" value="arg" />
          <Picker.Item label="Estados Unidos" value="us" />
          <Picker.Item label="Colombia" value="col" />
          <Picker.Item label="España" value="es" />
          <Picker.Item label="Peru" value="pe" />
        </Picker>
      </View>
      <TouchableHighlight
        onPressIn={animacionEntrada}
        onPressOut={animacionSalida}
        onPress={consultarPais}>
        <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
          <Text style={styles.textoBuscar}>Buscar País</Text>
        </Animated.View>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  itempais: {
    height: 60,
    backgroundColor: '#fff',
  },
  btnBuscar: {
    marginTop: 50,
    height: 50,
    backgroundColor: '#000',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  textoBuscar: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
