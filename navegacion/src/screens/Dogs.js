import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Akita inu',
    origen: 'Japón',
    src: require('../img/p1.jpg'),
  },
  {
    id: 2,
    title: 'Lebrel escocés',
    origen: 'Reinod Unido',
    src: require('../img/p2.jpg'),
  },
  {
    id: 3,
    title: 'Labrador Retriever',
    origen: 'Canadá',
    src: require('../img/p3.jpg'),
  },
  {
    id: 4,
    title: 'Perro de Groenlandia',
    origen: 'Groenlandia, Canadá',
    src: require('../img/p4.jpg'),
  },
  {
    id: 5,
    title: 'Cocker spaniel',
    origen: 'Reino unido',
    src: require('../img/p5.jpg'),
  },
];

const Item = ({title, origen, src}) => (
  <View style={styles.item}>
    <Image style={styles.img} source={src} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.origen}>{origen}</Text>
    </View>
  </View>
);

export default function Dogs() {
  const renderItem = ({item}) => (
    <Item title={item.title} origen={item.origen} src={item.src} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  item: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 20,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
  },
  info: {
    marginLeft: 10,
  },
  title: {
    width: 220,
    fontSize: 26,
  },
  origen: {
    color: 'gray',
    fontSize: 20,
  },
});
