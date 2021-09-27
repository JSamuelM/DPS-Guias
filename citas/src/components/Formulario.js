import React, { useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from "shortid";

import colors from "../utils/colors";

const Formulario = ({
  reservas,
  setReservas,
  guardarMostrarForm,
  guardarReservaStorage,
}) => {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [zona, setZona] = useState(false);

  const toggleSwitch = () => setZona((previousState) => !previousState);

  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const hideDatePicker = () => {
    setDatePicker(false);
  };

  const confirmarFecha = (fecha) => {
    const opciones = { year: "numeric", month: "long", day: "2-digit" };
    setFecha(fecha.toLocaleDateString("es-ES", opciones));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePicker(true);
  };
  const hideTimePicker = () => {
    setTimePicker(false);
  };

  const confirmarHora = (hora) => {
    const opciones = { hour: "numeric", minute: "2-digit", hour12: false };
    setHora(hora.toLocaleString("es-ES", opciones));
    hideTimePicker();
  };

  // Crear reserva
  const crearReserva = () => {
    if (
      nombre.trim() === "" ||
      personas.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === ""
    ) {
      mostrarAlerta();
      return;
    }

    const reserva = { nombre, personas, fecha, hora, zona };
    reserva.id = shortid.generate();

    const reservasNueva = [...reservas, reserva];
    setReservas(reservasNueva);

    guardarReservaStorage(JSON.stringify(reservasNueva));
    guardarMostrarForm(false);

    setNombre("");
    setPersonas("");
    setFecha("");
    setHora("");
    setZona("");
  };

  const mostrarAlerta = () => {
    Alert.alert("Error", "Todos los campos son obligatorios", [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <>
      <ScrollView style={styles.formulario}>
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput style={styles.input} onChangeText={(t) => setNombre(t)} />
        </View>
        <View>
          <Text style={styles.label}>Números de personas:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(t) => setPersonas(t)}
          />
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button
            title="Seleccionar Fecha"
            onPress={showDatePicker}
            color={colors.ACCENT_COLOR}
          />
          <DateTimePickerModal
            isVisible={datePicker}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button
            title="Seleccionar Fecha"
            onPress={showTimePicker}
            color={colors.ACCENT_COLOR}
          />
          <DateTimePickerModal
            isVisible={timePicker}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hora}</Text>
        </View>
        <View>
          <Text style={styles.label}>Área de fumadores:</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: colors.ACCENT_COLOR }}
            thumbColor={zona ? colors.ACCENT_COLOR : colors.DIVIDER_COLOR}
            ios_backgroundColor={colors.DIVIDER_COLOR}
            onValueChange={toggleSwitch}
            value={zona}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => crearReserva()}
            style={styles.btnSubmit}
          >
            <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    paddingLeft: 10,
    height: 50,
    borderColor: colors.ACCENT_COLOR,
    borderWidth: 1,
    borderStyle: "solid",
  },
  switch: {
    marginEnd: "auto",
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: colors.ACCENT_COLOR,
    marginVertical: 10,
  },
  textoSubmit: {
    color: colors.TEXT_ICONS,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Formulario;
