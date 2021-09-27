import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Formulario from "./src/components/Formulario";
import Reserva from "./src/components/Reserva";
import colors from "./src/utils/colors";

export default function App() {
  const [reservas, setReservas] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);

  useEffect(() => {
    const obtenerReservarStorage = async () => {
      try {
        const reservasStorage = await AsyncStorage.getItem("reservas");
        if (reservasStorage) {
          setReservas(JSON.parse(reservasStorage));
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerReservarStorage();
  }, []);

  const eliminarReserva = (id) => {
    const reservasFiltradas = reservas.filter((reserva) => reserva.id !== id);
    setReservas(reservasFiltradas);
    guardarReservasStorage(JSON.stringify(reservasFiltradas));
  };

  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  const guardarReservasStorage = async (reservasJSON) => {
    try {
      await AsyncStorage.setItem("reservas", reservasJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Reservas</Text>
        <View>
          <TouchableHighlight
            onPress={() => mostrarFormulario()}
            style={styles.btnMostrarForm}
          >
            <Text style={styles.textoMostrarForm}>
              {mostrarForm ? "Cancelar Reservación" : "Crear Reservación"}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear Resevación</Text>
              <Formulario
                reservas={reservas}
                setReservas={setReservas}
                guardarMostrarForm={setMostrarForm}
                guardarReservaStorage={guardarReservasStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {reservas.length > 0
                  ? "Administrar Reservaciones"
                  : "No hay reservas, agrega una"}
              </Text>
              <FlatList
                style={styles.listado}
                data={reservas}
                renderItem={({ item }) => (
                  <Reserva item={item} eliminarReserva={eliminarReserva} />
                )}
                keyExtractor={(reserva) => reserva.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colors.PRIMARY_COLOR,
  },
  titulo: {
    color: colors.TEXT_ICONS,
    marginTop: Platform.OS === "ios" ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  contenido: {
    flex: 1,
    marginHorizontal: "2.5%",
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: colors.ACCENT_COLOR,
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: colors.TEXT_ICONS,
    fontWeight: "bold",
    textAlign: "center",
  },
});
