import React, { useEffect, useState } from 'react';
import {View, Button, TextInput, StyleSheet, FlatList, Alert} from 'react-native';
import {PlaceItem} from './Components'
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { FIREBASE_DB } from '../config/firebaseconfig';


const PlaceList = ({data, input}) => {

    const [places, setPlaces] = useState([])

    useEffect(() => {
      async function fetchData(){
        const list = []
        const querySnapshot = await getDocs(collection(FIREBASE_DB, "Places"));
        querySnapshot.forEach((doc) => {
            list.push({...doc.data(), id: doc.id})
        })
        setPlaces(list)
      };
      fetchData();
    },[])

    return (
      <View>
        {/* <Button  title='getPlaces' onPress={() => {getPlaces()}}></Button> */}
        <FlatList
            data={places}
            renderItem={({index, item}) => {
                if(input === "")
                {
                  return (<PlaceItem data={item}/>)
                }
                if(item.name.toLowerCase().includes(input.toLowerCase()))
                {
                  return (<PlaceItem data={item}/>)
                }
                
            }}/>
      </View>
    )
  }

  export default PlaceList

  const styles = StyleSheet.create({

  });