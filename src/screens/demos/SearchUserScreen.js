import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { UserProvider } from '../../context/userContext';

import SearchBar from '../../components/SearchBar';
import UserCard from '../../components/UserCard';

const SearchUserDemo = () => {
  return (
    <UserProvider>
      <SafeAreaView>
        <SearchBar/>
        <UserCard />
      </SafeAreaView>
    </UserProvider>
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

export default SearchUserDemo;