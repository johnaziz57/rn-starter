import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const namesList = [
    { name: "Martin", age: 13 },
    { name: "Jessica", age: 10 },
    { name: "Mona", age: 39 },
    { name: "Emad", age: 39 },
    { name: "John", age: 29 },
  ];
  return (
    <View>
      <Text>List Screen</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={namesList}
        renderItem={({item}) => <Text>Name:{item.name} - Age:{item.age}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
