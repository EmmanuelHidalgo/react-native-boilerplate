import React, { useContext } from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image, Dimensions } from 'react-native';
import { DogContext } from '../../context/dogContext';

const UserCard = () => {
  const { dogData } = useContext(DogContext);
  const { width, height } = Dimensions.get('screen');

  const styles = StyleSheet.create({
    header: {
      fontSize: 45
    },
    subheader: {
      fontSize: 20
    },
    dogImage: {
      width: width * 0.9,
      height: '80%',
      alignSelf: 'center'
    }
  });

  if ( !dogData ) return (
    <SafeAreaView>
      <Text>Type the Dog breed eg. Chihuahua</Text>
    </SafeAreaView>
  )

  const { message } = dogData;

  return (
    <SafeAreaView>
      <View>
        <Image
          source={{ uri: message }}
          style={styles.dogImage}
        />
      </View>
    </SafeAreaView>
  )
}

export default UserCard;