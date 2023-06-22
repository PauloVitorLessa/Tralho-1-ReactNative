import React from "react"
import { useContext, useState, useEffect} from 'react';
import { Text, View, FlatList, StyleSheet, Image, ScrollView } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const Item = ({img, navigation}) => (
   <TouchableOpacity onPress={() => {
    navigation.navigate("Editoras");
   }}>
     <Image
         style={styles.tinyLogo}
         source={{
           uri: `data:image/png;base64,${img}`
         }}
       />
   </TouchableOpacity>
 );

export default function LivrosRecentes({ navigation }) {
  const {dadosUsuario} = useContext(DataContext);
  const [dadosLivros, setDadosLivros] = useState('');

  useEffect(() => {
    getTodosLivros();
  }, [])

  const getTodosLivros = async () => {
    await AxiosInstance.get(
      '/livros',
      //Abaixo está pegando o Token da JWT
      {headers: {"Authorization" : `Bearer ${dadosUsuario?.token}`}}
    ).then( resultado => {
      console.log('getTodosLivros' + JSON.stringify(resultado.data));
      setDadosLivros(resultado.data);
    }).catch((error) => {
      console.log("Ocorreu um erro ao recuperar os dados dos livros: " + error)
    })
  }

  return(
    <View>
      <Text style={styles.title}>RECENTES</Text>
        <FlatList
          data={dadosLivros}
          renderItem={({item}) => <Item img={item.img} navigation={navigation} nome={item.nomeEditora} />}
          keyExtractor={item => item.codigoLivro}
          horizontal={true}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    margin: 10,
    width: 150,
    height: 250,
  },
});