import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Button } from 'react-native';

import SearchBar from '../../components/SearchBar';
import DogImage from '../../components/DogImage';

const SearchUserDemo = ({navigation}) => {
  const { width } = Dimensions.get('screen');
  const styles = StyleSheet.create({
    container: {
      width: width * 0.9,
      alignSelf: 'center'
    }
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBar/>
        <DogImage />
      </SafeAreaView>
      <Button
        title="See latest searches"
        style={{
          marginTop: 0
        }}
        onPress={() => navigation.navigate('AllDogs')}
      />
    </>
  )
}


export default SearchUserDemo;