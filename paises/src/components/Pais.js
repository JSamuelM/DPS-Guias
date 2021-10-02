import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

const Pais = ({resultado}) => {
  const [info, setInfo] = useState([]);
  const [nombre, setNombre] = useState();
  const [capital, setCapital] = useState();
  const [region, setRegion] = useState();
  const [lengua, setLengua] = useState([]);
  const [superficie, setSuperficie] = useState();

  useEffect(() => {
    setInfo(resultado);
    Object.values(info).map(e => {
      lengua.length = 0;
      setNombre(e.nome.abreviado);
      setCapital(e.governo.capital.nome);
      setRegion(e.localizacao.regiao.nome);
      setSuperficie(e.area.total * 1000);
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
        <Image 
          style={}
        />
        <Text>Capital: {capital}</Text>
        <Text>Region: {region}</Text>
        <Text>Lengua: {lengua.toString()}</Text>
        <Text>
          Superficie Total: {superficie > 0 ? superficie : 0} Metros Cuadrados
        </Text>
      </View>
    </Card>
  );
};

export default Pais;
