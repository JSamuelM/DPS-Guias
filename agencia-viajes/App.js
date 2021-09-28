import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel Centroamérica
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModal(!modal);
                }}
              />
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.banner}>
            <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
          </View>
          <StatusBar style="auto" />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModal(!modal);
                }}
              >
                <Image
                  style={styles.ciudad}
                  source={require("./src/img/1.jpg")}
                />
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModal(!modal);
                }}
              >
                <Image
                  style={styles.ciudad}
                  source={require("./src/img/2.png")}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/3.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/4.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/5.jpg")}
              />
            </View>
          </ScrollView>

          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
              <TouchableHighlight
                onPress={() => {
                  setModal(!modal);
                }}
              >
                <Image
                  style={styles.mejores}
                  source={require("./src/img/c1.jpg")}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/img/c2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/img/c3.jpg")}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Rutas Turísticas</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <TouchableHighlight
                onPress={() => {
                  setModal(!modal);
                }}
              >
                <Image
                  style={styles.mejores}
                  source={require("./src/img/t1.jpg")}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/t2.jpg")}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/t3.jpg")}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/img/t4.jpg")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
    resizeMode: "cover",
  },
  vistaModal: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  Modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  listado: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listaItem: {
    flexBasis: "49%",
  },
});
