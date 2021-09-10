import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Result(props) {
  const { salary, netEarns } = props;

  return (
    <View style={styles.content}>
      {salary && (
        <View>
          <Text style={styles.title}>Resultado</Text>
          <DataResult title="Salario base:" value={`${salary}`} />
          <DataResult title="Salario neto:" value={`${netEarns}`} />
        </View>
      )}
    </View>
  );
}

function DataResult({ title, value }) {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>${value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
