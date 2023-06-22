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

//const { rating } = this.props;

//const CardLivro = ({ urlImage, title, description })

export default function CardLivro(props) {
  return (
    <View style={styles.CardLivro}>
      <Image
        source={{
          uri: props.img,
        }}
        style={styles.imageCardLivro}
      ></Image>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardDescription}>{props.description}</Text>
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
    padding: 10,
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
  imageCardLivro: {
    width: 165,
    height: 120,
    resizeMode: "cover",
  },
  imageCardDestaque: {
    width: 340,
    height: 230,
    resizeMode: "cover",
  },
  CardLivro: {
    backgroundColor: "white",
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 5,
    paddingBottom: 3,
    marginBottom: 5,
    marginTop: 5,
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
});
