import React from 'react';
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';

const DemosScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Please select one of the following demos:</Text>
      <Button
        onPress={ () => navigation.navigate('Search')}
        title="Go to Search User"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40
  },
  subheader: {
    fontSize: 20
  }
});

export default DemosScreen;