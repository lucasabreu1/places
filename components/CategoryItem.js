import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';

const CategoryItem = ({data}) => {
    return (
        <View style={styles.placeContainer}>
            <Image style={styles.image} source={ImagesAssets[data.imageName]}></Image>
            <Text style={styles.placeTitle}>{data.title}</Text>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({

    placeContainer: {
      flex: 1,
        flexDirection: 'column',
        width: 130,
        height: 130,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
      },

      image: {
        flex:2,
        width: null, 
        height: null,
        resizeMode: 'cover'
      },

      placeTitle: {
        flex:1,
        fontWeight: "bold",
        marginTop:10,
        marginLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        color: "#000000",
        textAlign: "center"
      },
})