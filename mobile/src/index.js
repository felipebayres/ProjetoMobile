/* eslint-disable prettier/prettier */
import React, {useEffect,useState} from 'react';
import {SafeAreaView,FlatList, Text, StyleSheet , StatusBar} from 'react-native';
import api from './services/api';

export default function App() {
  const [projects,setProjects] = useState([]);
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);
  return (
    <>
    <StatusBar barStyle = "light-content" backgroundColor = "#000" />
    <SafeAreaView style = {styles.container}>
      <FlatList
        data = {projects}
        keyExtractor = {project => project.id}
        renderItem = {({item}) => (
          <Text style = {styles.project} > {item.title } </Text>
          )
        }
      />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize:32,
    fontWeight: 'bold',
  },
}
);