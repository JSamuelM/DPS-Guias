import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { collection, addDoc } from 'firebase/firestore'
import db from '../plugins/firebase'

const AddManifold = () => {

  const [formData, setFormData] = useState({});

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  }

  const addManifold = async () => {
    try {
      console.log('async');
      const data = formData;
      const docRef = await addDoc(collection(db, 'collectors'), data);
      console.log('Document written with ID: ', docRef);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const showAlert = () => {
    Alert.alert(title, message, [{text: 'OK'}])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar colector</Text>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput 
        style={styles.input}
        placeholder="Del Sur"
        onChange={(e) => onChange(e, 'name')}
      />
      <Text style={styles.label}>Compañia:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Compañia Energía Eléctrica"
        onChange={(e) => onChange(e, 'company')}
      />
      <Text style={styles.label}>Código de Ref:</Text>
      <TextInput 
        style={styles.input} 
        placeholder="COL03"
        onChange={(e) => onChange(e, 'code')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={addManifold}
      >
        <Text 
          style={{color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}
        >
          Agregar Colector
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    marginVertical: 15,
    paddingVertical: 15,
    width: '100%',
  },
});

export default AddManifold
