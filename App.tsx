import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.myName}>Ali Ataf</Text>
      <Button
        title="Click Me"
        onPress={() => {
          alert("My first react-native app");
        }}
        color="darkcyan"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  myName: {
    marginBottom: 10,
  },
});
