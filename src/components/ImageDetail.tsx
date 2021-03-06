import React from "react"
import { Text, StyleSheet, View, Button } from "react-native";


interface ImageDetailProps {
  readonly title: string;
  readonly image?: string
}

const ImageDetail = (props: ImageDetailProps) => {
  console.log(props.title);
  
  return (
    <Text>123</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default ImageDetail;