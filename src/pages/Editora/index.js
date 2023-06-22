import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { Rating } from "react-native-ratings";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import { EditoraContext } from "../../context/EditoraContext";
import CardLivro from "../../components/CardLivro/CardLivro";
import CardLivroHorizontal from "../../components/CardLivro/CardLivroHorizontal";
import CardLivroGrande from "../../components/CardLivro/CardLivroGrande";

const DATA_RECENTES = [
  {
    id: "1",
    urlImg:
      "https://images.pexels.com/photos/17054024/pexels-photo-17054024/free-photo-of-agricultura-colheita-safra-terra-cultivada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 1",
    description: "description 1",
  },
  {
    id: "2",
    urlImg:
      "https://images.pexels.com/photos/16988521/pexels-photo-16988521/free-photo-of-animal-bicho-fofo-bonitinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 2",
    description: "description 2",
  },
  {
    id: "3",
    urlImg:
      "https://images.pexels.com/photos/16897680/pexels-photo-16897680/free-photo-of-arquitetura-construcao-predio-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 3",
    description: "description 3",
  },
  {
    id: "4",
    urlImg:
      "https://images.pexels.com/photos/16636452/pexels-photo-16636452/free-photo-of-agricultura-arquitetura-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 4",
    description: "description 4",
  },
  {
    id: "5",
    urlImg:
      "https://images.pexels.com/photos/17054024/pexels-photo-17054024/free-photo-of-agricultura-colheita-safra-terra-cultivada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 1",
    description: "description 1",
  },
  {
    id: "6",
    urlImg:
      "https://images.pexels.com/photos/16988521/pexels-photo-16988521/free-photo-of-animal-bicho-fofo-bonitinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 2",
    description: "description 2",
  },
  {
    id: "7",
    urlImg:
      "https://images.pexels.com/photos/16897680/pexels-photo-16897680/free-photo-of-arquitetura-construcao-predio-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 3",
    description: "description 3",
  },
  {
    id: "8",
    urlImg:
      "https://images.pexels.com/photos/16636452/pexels-photo-16636452/free-photo-of-agricultura-arquitetura-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 4",
    description: "description 4",
  },
  {
    id: "9",
    urlImg:
      "https://images.pexels.com/photos/17054024/pexels-photo-17054024/free-photo-of-agricultura-colheita-safra-terra-cultivada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 1",
    description: "description 1",
  },
  {
    id: "10",
    urlImg:
      "https://images.pexels.com/photos/16988521/pexels-photo-16988521/free-photo-of-animal-bicho-fofo-bonitinho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 2",
    description: "description 2",
  },
  {
    id: "11",
    urlImg:
      "https://images.pexels.com/photos/16897680/pexels-photo-16897680/free-photo-of-arquitetura-construcao-predio-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 3",
    description: "description 3",
  },
  {
    id: "12",
    urlImg:
      "https://images.pexels.com/photos/16636452/pexels-photo-16636452/free-photo-of-agricultura-arquitetura-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "image 4",
    description: "description 4",
  },
];

const RenderHomeEditora = (props) => {
  return (
    <View style={styles.container}>
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
  let size = listaLivros.length % 5;
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
  console.log(dataList);

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
    //alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    flex: 1,
    marginTop: 37,
    padding: 5,
  },
  editorasContainer: {
    backgroundColor: "black",
    flex: 0.5,
  },

  recentesContainer: {
    alignItems: "flex-start",

    backgroundColor: "black",
    flex: 0.6,

    text: {
      color: "white",
      fontSize: 20,
    },
  },
  destaqueContainer: {
    alignItems: "flex-start",

    backgroundColor: "black",
    flex: 1,

    text: {
      color: "white",
      fontSize: 20,
    },
  },

  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    alignSelf: "center",
    borderRadius: 10,
  },
  cardTitle: {
    color: "black",
    fontSize: 16,
    textAlign: "left",
    borderRadius: 10,
    paddingLeft: 3,
  },
  cardDescription: {
    color: "gray",
    fontSize: 12,
    textAlign: "left",
    borderRadius: 10,
    paddingLeft: 3,
  },

  input: {
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 5,
    padding: 4,
    width: 200,
  },

  button: {
    backgroundColor: "white",
    marginTop: 10,
    width: 200,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },

  buttonText: {
    color: "white",
  },
  item: {
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  imageEditora: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginRight: 30,
    //marginTop: 40,
    justifyContent: "center",
  },

  imageCardDestaque: {
    width: 340,
    height: 230,
    resizeMode: "cover",
  },

  CardDestaque: {
    backgroundColor: "white",
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 5,
    paddingBottom: 3,
    marginTop: 3,
  },
  destaqueBodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    padding: 10,
  },

  flexDirectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
