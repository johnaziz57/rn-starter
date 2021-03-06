import React from "react"
import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from "../components/ImageDetail"

const ImageScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>ImageScreen</Text>
      <ImageDetail title={"Forest"}/>
      <ImageDetail title={"Beach"}/>
      <ImageDetail title={"Mountain"}/>
      <ImageDetail title={"Farm"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;