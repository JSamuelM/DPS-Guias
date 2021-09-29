import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.main}>
      <ScrollView>
        <Text style={styles.title}>Hotel Real I</Text>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>
            "Disfruta de tu estadía en nuestras instalaciones y de su ubicación
            en San Salvador."
          </Text>
          <StatusBar style="dark" />
          <View>
            <Text style={styles.titleSection}>Habitaciones</Text>
            <ScrollView horizontal>
              <View style={styles.room} elevation={5}>
                <Image
                  style={styles.roomImage}
                  source={require("./src/img/h1.jpg")}
                />
                <View style={styles.roomInfo}>
                  <Text style={styles.roomTitle}>Habitación Clásica</Text>
                  <Text style={styles.roomSubtitle}>
                    Disfrute de un buen descanso en la comodidad de nuestras
                    habitaciones, las cuales cuentan con amenidades de alta
                    calidad.
                  </Text>
                </View>
              </View>
              <View style={styles.room} elevation={5}>
                <Image
                  style={styles.roomImage}
                  source={require("./src/img/h2.jpg")}
                />
                <View style={styles.roomInfo}>
                  <Text style={styles.roomTitle}>Habitación Ejecutiva</Text>
                  <Text style={styles.roomSubtitle}>
                    El nivel Ejecutivo ofrece check in privado, servicio de
                    mayordomo, desayuno continental y entremeses por las tardes.
                  </Text>
                </View>
              </View>
              <View style={styles.room} elevation={5}>
                <Image
                  style={styles.roomImage}
                  source={require("./src/img/h3.jpg")}
                />
                <View style={styles.roomInfo}>
                  <Text style={styles.roomTitle}>Habitación Suite</Text>
                  <Text style={styles.roomSubtitle}>
                    Contamos con cinco Junior Suites y una Suite Presidencial,
                    neustros huéspedes alojados en suites gozan de los
                    beneficios del Piso Ejecutivo.
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View>
            <Text style={styles.titleSection}>Servicios</Text>
            <View style={styles.services}>
              <View style={styles.service} elevation={1}>
                <Ionicons name="md-bicycle" color="#E8542C" size={30} />
                <Text style={styles.serviceTitle}>Reuniones o Eventos</Text>
              </View>
              <View style={styles.service} elevation={4}>
                <Ionicons name="md-cafe" color="#E8542C" size={30} />
                <Text style={styles.serviceTitle}>Bodas</Text>
              </View>
              <View style={styles.service} elevation={4}>
                <Ionicons name="md-people" color="#E8542C" size={30} />
                <Text style={styles.serviceTitle}>Servicio Catering</Text>
              </View>
              <View style={styles.service} elevation={4}>
                <Ionicons name="md-aperture" color="#E8542C" size={30} />
                <Text style={styles.serviceTitle}>Eventos</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.titleSection}>Lugares de Interes</Text>
            <View style={styles.interess}>
              <View style={styles.interes}>
                <Text style={styles.interesText}>Metrocentro</Text>
                <Image
                  style={styles.interesImage}
                  source={require("./src/img/i1.jpg")}
                />
              </View>
              <View style={styles.interes}>
                <Text style={styles.interesText}>Plaza Libertad</Text>
                <Image
                  style={styles.interesImage}
                  source={require("./src/img/i2.jpg")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontStyle: "italic",
    marginVertical: 10,
    textAlign: "center",
  },
  banner: {
    height: 250,
    flex: 1,
  },
  titleSection: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  room: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 10,
    marginVertical: 20,
    height: 325,
  },
  roomImage: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: 275,
    height: 175,
    resizeMode: "cover",
  },
  roomInfo: {
    minHeight: 60,
  },
  roomTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 15,
  },
  roomSubtitle: {
    marginHorizontal: 20,
    width: 235,
  },
  services: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  service: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexBasis: "48%",
  },
  serviceTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  interess: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  interes: {},
  interesText: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  interesImage: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: "100%",
    height: 175,
    resizeMode: "cover",
  },
});
