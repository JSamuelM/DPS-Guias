import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const Collector = ({name, company, code}) => {
  return (
    <View style={styles.container} elevation={5}>
      <View style={styles.info}>
        <Text style={[styles.text, styles.name]}>{name}</Text>
        <Text style={[styles.text, styles.company]}>{company}</Text>
        <Text style={[styles.text, styles.code]}>{code}</Text>
        <Image
          style={styles.img}
          source={require('../img/code.png')}
        />
      </View>
      <View style={styles.actions}>
        <TouchableHighlight
          style={styles.delete}
        >
          <Icon name="trash-outline" size={28} color='#fff' />
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
  },
  info: {
    flex: 1,
  },
  text: {
    color: '#000',
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
  },
  code: {
    color: 'gray',
    fontSize: 14,
  },
  img: {
    backgroundColor: 'red',
    width: 150,
    height: 40,
    padding: 0,
    margin: 0,
  },
  actions: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 5,
  },
});

export default Collector
