import React from "react"
import { useContext, useState, useEffect} from 'react';
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Livro() {
  const {dadosUsuario} = useContext(DataContext);
  const [dadosLivro, setDadosLivro] = useState('');
  
  useEffect(() => {
    getLivroId();
  }, [])
  
  const ComprarLivro = ({img}) => (
     <TouchableOpacity>
       <Image
           style={styles.tinyLogo}
           source={{
             uri: `data:image/png;base64,${img}`
           }}
         />
     </TouchableOpacity>
   );
  return(
    <View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});