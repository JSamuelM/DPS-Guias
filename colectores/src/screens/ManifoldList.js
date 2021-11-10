import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Collector from '../components/Collector'
import { collection, getDocs } from '@firebase/firestore'
import db from '../plugins/firebase'

const ManifoldList = () => {

  useEffect(() => {
    console.log('effect');
    const getData = async () => {
      const data = await getDocs(collection(db, 'collectors'));
      data.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      })
    }

    getData();
  }, [])

  return (
    <View style={styles.container}>
      <Collector
        name={"DelSur"}
        company={"Energia Electrica"}
        code={"COL03"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20
  }
})

export default ManifoldList
