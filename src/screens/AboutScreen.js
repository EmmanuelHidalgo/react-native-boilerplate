import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const AboutScreen = () => {
  const name = 'Emmanuel';

  return (
    <SafeAreaView>
      <Text style={styles.header}>Welcome to React Native!</Text>
      <Text style={styles.subheader}>About Screen</Text>
    </SafeAreaView>
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

export default AboutScreen;