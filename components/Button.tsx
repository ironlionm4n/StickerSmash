import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { Dispatch, SetStateAction } from "react";

interface ButtonProps {
  label: string;
  theme?: string;
  onPressHandler: () => Promise<Object> | Promise<void> | void;
}

const Button = ({ label, theme, onPressHandler }: ButtonProps) => {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#85C7F2", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#dbdbdb" }]}
          onPress={onPressHandler}
        >
          <FontAwesome
            name="photo"
            size={24}
            color="#4c4c4c"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#4c4c4c" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPressHandler}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    marginVertical: 6,
    backgroundColor: "#fff",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
