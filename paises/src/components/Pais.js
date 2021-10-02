import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';

const Pais = ({resultado}) => {
  const [info, setInfo] = useState([]);
  const [nombre, setNombre] = useState();
  const [capital, setCapital] = useState();
  const [region, setRegion] = useState();
  const [lengua, setLengua] = useState([]);

  useEffect(() => {
    setInfo(resultado);
    Object.values(info).map(e => {
      lengua.length = 0;
      setNombre(e.nome.abreviado);
      setCapital(e.governo.capital.nome);
      setRegion(e.localizacao.regiao.nome);
      Object.values(e.linguas).map(l => {
        lengua.push(l.nome);
      });
    });
  });

  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{justifyContent: 'center'}}>
        <Text>Capital: {capital}</Text>
        <Text>Region: {region}</Text>
        <Text>Lengua: {lengua.toString()}</Text>
      </View>
    </Card>
  );
};

export default Pais;
