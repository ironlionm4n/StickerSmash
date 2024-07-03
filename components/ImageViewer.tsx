import { StyleSheet, Text, View, Image, ImageProps } from "react-native";
import React, { SetStateAction } from "react";

declare type ImageViewerProps = {
  placeholderImageSource: ImageProps["source"];
  selectedImage: SetStateAction<string>;
};

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: ImageViewerProps) {
  return (
    <View style={styles.imageContainer}>
      <Image source={placeholderImageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
