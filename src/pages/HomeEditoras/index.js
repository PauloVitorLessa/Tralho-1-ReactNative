import React from "react";
import { useContext, useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DataContext } from "../../context/DataContext";
import AxiosInstance from "../../api/AxiosInstance";

export default function HomeEditoras() {
  const { dadosUsuario } = useContext(DataContext);
  const [dadosEditora, setDadosEditora] = useState("");
  const Item = ({ img }) => (
    <TouchableOpacity>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `data:image/png;base64,${img}`,
        }}
      />
    </TouchableOpacity>
  );

  useEffect(() => {
    getTodasEditoras();
  }, []);

  const getTodasEditoras = async () => {
    await AxiosInstance.get(
      "/editoras",
      //Abaixo está pegando o Token da JWT
      { headers: { Authorization: `Bearer ${dadosUsuario?.token}` } }
    )
      .then((resultado) => {
        console.log("getTodasEditoras" + JSON.stringify(resultado.data));
        setDadosEditora(resultado.data);
      })
      .catch((error) => {
        console.log(
          "Ocorreu um erro ao recuperar os dados das editoras: " + error
        );
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDITORAS</Text>
      <FlatList
        data={dadosEditora}
        renderItem={({ item }) => (
          <Item
            img={item.img}
            navigation={navigation}
            nome={item.nomeEditora}
          />
        )}
        keyExtractor={(item) => item.codigoEditora}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    alignItems: "center",
  },
  tinyLogo: {
    margin: 10,
    width: 100,
    height: 100,
  },
});
