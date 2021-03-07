import React from "react"
import { Text, StyleSheet, View, Button } from "react-native";
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ImageScreen</Text>
      <ImageDetail title={"Forest"} imagePath={require('../../assets/forest.jpg') } score={"9"}/>
      <ImageDetail title={"Beach"} imagePath={require('../../assets/beach.jpg')} score={"1"}/>
      <ImageDetail title={"Mountain"} imagePath={require('../../assets/mountain.jpg')} score={"8"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;