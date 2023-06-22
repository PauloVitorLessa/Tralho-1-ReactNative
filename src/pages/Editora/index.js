import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { Rating } from "react-native-ratings";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import { EditoraContext } from "../../context/EditoraContext";
import CardLivro from "../../components/CardLivro/CardLivro";
import CardLivroHorizontal from "../../components/CardLivro/CardLivroHorizontal";
import CardLivroGrande from "../../components/CardLivro/CardLivroGrande";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RenderHomeEditora = (props) => {
  return (
    <View style={styles.cardContainer}>
      {props.item[0].img ? (
        <CardLivroHorizontal
          img={props.item[0].img}
          title={props.item[0].title}
          //description={props.item[0].description}
        />
      ) : null}

      <View style={styles.flexDirectionRow}>
        {props.item[1].img ? (
          <CardLivro
            img={props.item[1].img}
            title={props.item[1].title}
            //description={props.item[1].description}
          ></CardLivro>
        ) : null}
        {props.item[2].img ? (
          <CardLivro
            img={props.item[2].img}
            title={props.item[2].title}
            //description={props.item[2].description}
          ></CardLivro>
        ) : null}
      </View>
      {props.item[3].img ? (
        <CardLivroHorizontal
          img={props.item[3].img}
          title={props.item[3].title}
          //description={props.item[3].description}
        ></CardLivroHorizontal>
      ) : null}
      {props.item[4].img ? (
        <CardLivroGrande
          img={props.item[4].img}
          title={props.item[4].title}
          //description={props.item[4].description}
        ></CardLivroGrande>
      ) : null}
    </View>
  );
};

const generateData = () => {
  const { dadosEditora } = useContext(EditoraContext);
  const dataList = [];
  const listaLivros = dadosEditora.listaLivrosDTO;

  let size = listaLivros.length / 5;

  let count = 0;

  for (let i = 0; i <= size; i++) {
    let data = [];
    for (let j = 0; j < 5; j++) {
      data.push({
        img: listaLivros[j + count]?.imagem,
        title: listaLivros[j + count]?.nomeLivro,
        //description: listaLivros[j + count]?.description,
      });
    }
    dataList.push(data);
    count = count + 5;
  }

  return dataList;
};

export default function Editora() {
  const { dadosUsuario } = useContext(DataContext);
  const [dadosEditora, setDadosEditora] = useState();

  const dataList = generateData();

  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={({ item }) => <RenderHomeEditora item={item} />}
        keyExtractor={(item, index) => "key" + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 30,
    //padding: 10, // Aumentei a margem para 10
    flex: 1,
  },

  flexDirectionRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
  },
});
