import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

  return (
    <View>
      <Text style={style.titleStyle}>hallo we are Tom and my friend Jerry</Text>
      <Text style={style.textStyle}> My name is Martin</Text>
    </View>
  );
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 40,
  },
  textStyle: {
      fontSize: 20
  }
});

export default ComponentsScreen;
