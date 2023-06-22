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

export default function CardLivroHorizontal(props) {
  return (
    <View style={styles.CardLivroHorizontal}>
      <Image
        source={{
          uri: `data:image/png;base64,${props.img}`,
        }}
        style={styles.imageCardLivro}
      ></Image>
      <View style={styles.CardBody}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardDescription}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageCardLivro: {
    width: 170,
    height: 120,
    resizeMode: "cover",
  },

  CardLivroHorizontal: {
    backgroundColor: "white",
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 5,
    paddingBottom: 0,
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
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
  CardBody: {
    justifyContent: "center",
    padding: 3,
    width: 170,
  },
});
