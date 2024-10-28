import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { TrueSheet } from "@lodev09/react-native-true-sheet"
import { useState } from "react";
import { useRef } from "react";


const Index = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const sheet = useRef<TrueSheet>(null);

  const openSheet = () => {
    sheet.current?.present()
  };

  const closeSheet = () => {
    sheet.current?.dismiss()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openSheet}>
        <Text style={styles.buttonText}>Tap to open Sheet</Text>
      </TouchableOpacity>
      <TrueSheet
        cornerRadius={24}
        grabber={false}
        sizes={["100%"]}
        dismissible={false}
        keyboardMode="resize"
        ref={sheet}
      >
        <View style={styles.sheetContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter text"
            value={textInputValue}
            onChangeText={setTextInputValue}
          />
          <TouchableOpacity style={styles.button} onPress={closeSheet}>
            <Text style={styles.buttonText}>Close Sheet</Text>
          </TouchableOpacity>
        </View>
      </TrueSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  sheetContainer: {
    height: "100%",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 8,
  },
});

export default Index;
