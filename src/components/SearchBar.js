import React, { useState, useContext }  from 'react';
import { StyleSheet, View,TextInput, Button } from 'react-native';

// Api import
import fetchUserData from '../api/fetchUserData';

// Context import
import { UserContext } from '../context/userContext';


const SearchBar = () => {
  const [userId, setUserId] = useState('');
  const { setUserData } = useContext(UserContext);

  const onChangeId = (e) => {
    setUserId(e);
  }

  const searchUser = async () => {
    const userData = await fetchUserData(userId);
    setUserData(userData);
  }
  return (
    <View style={{flexDirection: 'row', width: '100%', padding: 16}}>
      <TextInput
        value={userId}
        onChangeText={onChangeId}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}/>
        <Button
          title="Search"
          style={{width: '20%'}}
          onPress={ searchUser}
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