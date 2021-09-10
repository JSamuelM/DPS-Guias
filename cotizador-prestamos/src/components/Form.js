import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import colors from "../utils/colors";

export default function Form(props) {
  const { salary, calculate } = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <Text style={styles.label}>Ingrese su salario base</Text>
        <TextInput
          placeholder="Salario base"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => salary(e.nativeEvent.text)}
        />
        <Pressable style={styles.button} onPress={calculate}>
          <Text style={styles.textButton}>Calcular</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    height: 180,
    justifyContent: "center",
  },
  viewInputs: {
    flexDirection: "column",
  },
  label: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#fff",
    width: "80%",
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 10,
  },
  textButton: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
