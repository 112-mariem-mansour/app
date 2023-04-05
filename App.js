import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
//import axios from 'axios';
import { scheduleNotificationAsync } from 'expo-notifications';

//const API_URL = 'http://127.0.0.1:8000/api/ordonnances';

export default function App() {
  const scheduleFirebaseNotification = async (date, time) => {
    const trigger = new Date(Date.parse(`${date}T${time}:00.000Z`)).getTime();
  
    await scheduleNotificationAsync({
      content: {
        title: 'Titre de la notification',
        body: 'Corps de la notification',
        data: { someData: 'information' },
      },
      trigger,
    });
  };
  scheduleFirebaseNotification('2023-04-04', '11:25');
  /*const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  <StatusBar style="auto" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />   */
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
       
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
