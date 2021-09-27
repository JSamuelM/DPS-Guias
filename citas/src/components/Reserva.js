import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import colors from "../utils/colors";

const Reserva = ({ item, eliminarReserva }) => {
  const dialogoEliminar = (id) => {
    console.log("Eliminado...");
    eliminarReserva(id);
  };

  return (
    <View style={styles.reserva}>
      <View style={styles.info}>
        <View>
          <Text style={styles.label}>Reservado a nombre:</Text>
          <Text style={styles.text}>{item.nombre}</Text>
        </View>
        <View>
          <Text style={styles.label}>
            Número de personas: <Text style={styles.text}>{item.personas}</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.label}>
            Área de Fumadores:{" "}
            <Text style={styles.text}>{item.zona == true ? "Si" : "No"}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.fecha}>
        <Text style={styles.fechaText}>
          <Text style={styles.fechaInfo}>Fecha:</Text> {item.fecha}
        </Text>
        <Text style={styles.fechaText}>
          <Text style={styles.fechaInfo}>Hora:</Text> {item.hora}
        </Text>
        <View style={styles.btn}>
          <TouchableHighlight
            onPress={() => dialogoEliminar(item.id)}
            style={styles.btnEliminar}
          >
            <Text style={styles.btnEliminarText}>Eliminar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reserva: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderBottomColor: colors.DIVIDER_COLOR,
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  info: {},
  fecha: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5,
    width: "40%",
    textAlign: "right",
  },
  fechaInfo: {
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  labelFecha: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
  },
  btn: {
    marginLeft: "auto",
    marginBottom: 0,
    marginTop: 20,
    width: "70%",
  },
  btnEliminar: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.ACCENT_COLOR,
  },
  btnEliminarText: {
    color: colors.TEXT_ICONS,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default Reserva;
