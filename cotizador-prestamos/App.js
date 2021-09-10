import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Form from "./src/components/Form";
import Result from "./src/components/Result";

import colors from "./src/utils/colors";

export default function App() {
  const [salary, setSalary] = useState(null);
  const [netEarns, setNetEarns] = useState(0);

  const calculate = () => {
    let isssPercentage = salary * 0.03;
    let afpPercentage = salary * 0.04;
    let rentPercentage = salary * 0.05;

    let net = salary - isssPercentage - afpPercentage - rentPercentage;

    setNetEarns(net);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calculo del salario neto</Text>
      </SafeAreaView>
      <Form salary={setSalary} calculate={calculate} />
      <Result salary={salary} netEarns={netEarns} />
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
});
