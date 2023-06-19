import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import ImagesAssets  from '../assets/ImagesAssets'
import CategoryItem from './CategoryItem';


const CategoryList = () => {

    const DATA = [
        {
          id: '1',
          title: 'Barzinho',
          imageName: 'barzinho'
        },
        {
          id: '2',
          title: 'Comida de Buteco',
          imageName: 'comidaDeButeco'
        },
        {
          id: '3',
          title: 'Cafeteria',
          imageName: 'cafeteria'
        },
        {
          id: '4',
          title: 'Roda de samba',
          imageName: 'rodaDeSamba'
        },
      ];

    return (
      <SafeAreaView>
        <Text style={styles.categoryTitle}>Ache o seu rolê!</Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({item}) => <CategoryItem data={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default CategoryList

const styles = StyleSheet.create({

    categoryTitle: {
      fontSize:24,
      fontWeight: 700,
      marginBottom:20,
      color: '#000'
    },

})