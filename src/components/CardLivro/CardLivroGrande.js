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

export default function CardLivroGrande(props) {
  return (
    <View style={styles.CardLivroGrande}>
      <Image
        source={{
          uri: `data:image/png;base64,${props.img}`,
        }}
        style={styles.imageCardLivro}
      ></Image>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardDescription}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

  imageCardLivro: {
    width: 340,
    height: 170,
    resizeMode: "cover",
  },

  CardLivroGrande: {
    backgroundColor: "white",
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 5,
    paddingBottom: 3,
    marginTop: 5,
    marginBottom: 5,
  },
});
