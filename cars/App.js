import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Card} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'Pupusas',
    description: 'Frijol, queso, harina de arroz.',
    src: require('./src/img/pupusas.jpg'),
  },
  {
    id: '2',
    title: 'Yuca Frita',
    description: 'Yuca, curtido, salsa de tomate.',
    src: require('./src/img/yuca.jpg'),
  },
  {
    id: '3',
    title: 'Gallina India',
    description: 'Gallina, sopa, verduras.',
    src: require('./src/img/gallina.jpg'),
  },
];

const Item = ({title, description, img}) => (
  <Card>
    <View style={styles.card}>
      <Image style={styles.img} source={img} />
      <View>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </Card>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.title} description={item.description} img={item.src} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // alignItems: 'center',
  },
  body: {
    backgroundColor: 'red',
    width: '50%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: '500',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  img: {
    width: 125,
    height: 125,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    resizeMode: 'cover',
    marginRight: 15,
  },
});

export default App;
