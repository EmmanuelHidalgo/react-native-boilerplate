import React, {useContext} from 'react';
import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { UserContext } from '../context/userContext';

const UserCard = () => {
  const { userData } = useContext(UserContext);

  if ( !userData ) return (
    <SafeAreaView>
      <Text>Type an user ID (1 to 10)</Text>
    </SafeAreaView>
  )

  const { email, id, name, phone, username, website } = userData;

  return (
    <SafeAreaView>
      <View>
        <Text>Id: {id}</Text>
        <Text>Name: {name}</Text>
        <Text>User Name: {username}</Text>
        <Text>Phone: {phone}</Text>
        <Text>Email: {email}</Text>
        <Text>Website: {website}</Text>
      </View>
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

export default UserCard;