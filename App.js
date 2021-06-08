import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

export default function App() {
  /* const [activeNewTodo, setActiveNewTodo] = useState(false); */
  const [listTodo, setListTodo] = useState([]);
  const [singleTodo, setSingleTodo] = useState("");

  const addTodo = (currTodo) => {
    setListTodo((oldArray) => [...oldArray, currTodo]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>{listTodo.length}</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/*  <Pressable
          onPress={() => {
            setActiveNewTodo(true);
          }}
        > */}
        <Image
          style={styles.tamaLogo}
          source={require("./assets/tamagotchi.png")}
        />
        {/*  </Pressable> */}

        <TextInput
          style={styles.tamaInput}
          onChangeText={setSingleTodo}
          onSubmitEditing={(() => addTodo(singleTodo))}
          placeholder="Give me a Task"
        />

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tamaLogo: {
    width: 250,
    height: 250,
  },
});
