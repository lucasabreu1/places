import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, } from 'react-native';
import { RecommendedItem } from "./Components"
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { FIREBASE_DB } from '../config/firebaseconfig';

const RecommendedList = () => {

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

    const DATA = [
        {
          id: '1',
          title: 'Pagode do Cozinha Arrumada',
          imageName: 'cozinha'
        },
        {
          id: '2',
          title: 'Quadrilatero',
          imageName: 'quadrilatero'
        },
        {
          id: '3',
          title: 'Fuska Bar',
          imageName: 'fuskaBar'
        },
        {
          id: '4',
          title: 'Museu do Amanha',
          imageName: 'museuDoAmanha'
        },
        {
            id: '5',
            title: 'Espaco cultural da marinha',
            imageName: 'espacoCulturalDaMarinha'
        },
        {
            id: '6',
            title: 'Museu do Amanha',
            imageName: 'museuDoAmanha'
        },
        {
            id: '7',
            title: 'Museu do Amanha',
            imageName: 'museuDoAmanha'
        },
        {
            id: '8',
            title: 'Museu do Amanha',
            imageName: 'museuDoAmanha'
        },
        // {
        //     id: '5',
        //     title: 'Fifth Item',
        // },
        // {
        //     id: '6',
        //     title: 'Fifth Item',
        // },
        // {
        //     id: '7',
        //     title: 'Fifth Item',
        // },
        // {
        //     id: "8",
        //     title: 'Fifth Item',
        // },
      ];

    return (
        <View style={styles.listContainer}>
            <Text style={styles.categoryTitle}>Lugares que você pode gostar</Text>
            <FlatList
            data={DATA}
            renderItem={({item}) => <RecommendedItem data={item} />}
            />
        </View>
    )
}

export default RecommendedList

const styles = StyleSheet.create({

    listContainer: {
        marginTop: 40
    },

    categoryTitle: {
        fontSize:24,
        fontWeight: 700,
        marginBottom:20,
        color: '#000000'
    },

})