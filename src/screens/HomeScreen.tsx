import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title={"Components"} onPress={() => navigation.navigate("Components")}/>
      <Button title={"List"} onPress={() => navigation.navigate("List")}/>
      <Button title={"Image"} onPress={() => navigation.navigate("Image")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
