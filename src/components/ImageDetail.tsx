import React from "react"
import { Text, StyleSheet, View, Button, Image, ImageSourcePropType } from "react-native";


interface ImageDetailProps {
  readonly title: string;
  readonly imagePath?: ImageSourcePropType;
  readonly score: string
}

const ImageDetail = (props: ImageDetailProps) => {
  const { title, imagePath, score } = props
  return (
    <>
      {imagePath && <Image source={imagePath}/>}
      <Text>{title}</Text>
      <Text>{score}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default ImageDetail;