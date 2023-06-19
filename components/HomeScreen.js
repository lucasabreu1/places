import React, { useEffect, useState } from 'react';
import {SearchBar, CategoryList, LineSeparator, RecommendedList, PlaceList } from "./Components"
import {View, Text, TextInput, StyleSheet, FlatList, Alert, SectionList} from 'react-native';

const HomeScreen = () => {
    const [input, setInput] = useState("");

    const PLACES = [
        {
          id: 1,
          name: 'Armazem Cardosao',
        },
        {
          id: 2,
          name: 'Natureza',
        },
        {
          id: 3,
          name: 'Cultural',
        },
        {
          id: 4,
          name: 'Roda de Samba',
        },
        {
          id: 5,
          name: 'Cafezinho',
        },
        {
          id: 6,
          name: 'Almoço',
        },
        {
          id: 7,
          name: 'Lara',
        },
        {
          id: 8,
          name: 'Laranja',
        },
        {
          id: 9,
          name: 'Sei la',
        },
        {
          id: 10,
          name: 'Armazem Botafogo',
        },  
        
      ]

    return (
        <View style={styles.container}>            
            <SearchBar input={input} handle={setInput}/>
            <LineSeparator marginTop={30} marginBottom={15}/>
            <CategoryList/>
            <RecommendedList></RecommendedList>
            {/* <PlaceList
                data={PLACES}
                input={input}
            /> */}
        </View>
      );
  }

  export default HomeScreen

  const styles = StyleSheet.create({
    container: {
      paddingTop: 22,
      marginLeft: 20,
      marginRight: 20,
    }

  });