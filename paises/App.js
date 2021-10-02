import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import Formulario from './src/components/Formulario';
import Pais from './src/components/Pais';

const App = () => {
  const [busqueda, setBusqueda] = useState({
    pais: '',
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});

  useEffect(() => {
    const {pais} = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setResultado(resultado);
          setConsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPais();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país', [
      {
        text: 'Ok',
      },
    ]);
  };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          guardarConsultar={setConsultar}
        />
        <Pais resultado={resultado} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido: {
    margin: '2.5%',
  },
});

export default App;
