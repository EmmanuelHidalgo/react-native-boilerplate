import React, { useState, useContext }  from 'react';
import { StyleSheet, View,TextInput, Button } from 'react-native';

// Api import
import fetchDogData from '../../api/fetchDogData';

// Context import
import { DogContext } from '../../context/dogContext';


const SearchBar = () => {
  const [ dogBreed, setDogBreed ] = useState('');
  const { setDogData,  recentSearches, setRecentSearches} = useContext(DogContext);

  const onChangeDogBreed = (e) => {
    setDogBreed(e.toLowerCase());
  }

  const searchDog = async () => {
    const dog = await fetchDogData(dogBreed);
    const  latestSearches = recentSearches;
    latestSearches.push(dog);
    setDogData(dog);
    setRecentSearches(latestSearches);
  }

  return (
    <View style={{flexDirection: 'row', width: '100%', paddingTop: 16, paddingBottom: 16}}>
      <TextInput
        value={dogBreed}
        onChangeText={onChangeDogBreed}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}/>
        <Button
          title="Search"
          onPress={ searchDog}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subheader: {
    fontSize: 20
  }
});

export default SearchBar;