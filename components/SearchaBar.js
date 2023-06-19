import React from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const SearchBar = ({input, handle}) => {
    return (
      <View 
        style={{
          padding:10,
          flexDirection: 'row',
          shadowOffset: { width: 0, height: 0},
          shadowColor: 'black',
          shadowOpacity: 0.2,
          elevation: 1,
          // width: '95%',
          backgroundColor:'white',
          borderRadius: 10,
          alignItems: "center",
        }}>
          <Icon
            style={{marginRight:10}}
            name="search1"
            size={20}
            color='#334933'
          />
          <TextInput 
            style={styles.input}
            placeholder="Encontre a boa"
            placeholderTextColor='black'
            value={input}
            onChangeText={handle}
            />
      </View>
    )
  }

  export default SearchBar

  const styles = StyleSheet.create({
    input: {
      fontSize: 14,
      padding: 0,
      }
  });