import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, Dimensions, Text, Image, FlatList, View } from 'react-native';

// Context import
import { DogContext } from '../../context/dogContext';



const AllDogs = () => {
  const { recentSearches } = useContext(DogContext);
  const { width } = Dimensions.get('screen');
  const imageW = width * 0.9;
  const imageH = imageW * 1.54;

  const styles = StyleSheet.create({
    container: {
      width: width * 0.9,
      alignSelf: 'center'
    }
  });

  if ( !recentSearches.length ) return (
    <SafeAreaView>
      <Text>Please make a search first</Text>
    </SafeAreaView>
  )

  return (
    <SafeAreaView>
    <FlatList
      data={recentSearches}
      keyExtractor={(_, index) => index.toString()}
      pagingEnabled
      renderItem={({item}) =>
        <View style={{width, justifyContent:'center', alignItems:'center'}}>
          <Image source={{uri: item.message}}
            style={{
              width: imageW,
              height: imageH,
              borderRadius: 16,
              marginBottom: 16,
              marginTop: 16
            }}
          />
        </View>
      }
      />
  </SafeAreaView>
  )
}


export default AllDogs;