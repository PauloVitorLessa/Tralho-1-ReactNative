import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useContext } from "react";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { armazenarDadosUsuario } = useContext(DataContext);

  const handleLogin = async () => {
    console.log(`E-mail: ${email} - Senha: ${senha}`);
    try {
      const resultado = await AxiosInstance.post("/auth/signin", {
        username: email,
        password: senha,
      });

      if (resultado.status === 200) {
        var jwtToken = resultado.data;
        armazenarDadosUsuario(jwtToken["accessToken"]);

        navigation.navigate("Home");
      } else {
        console.log("Erro ao realizar o login");
      }
    } catch (error) {
      console.log("erro durante o processo de login: " + error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-Vindo</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="e-mail"
        style={styles.input}
      />
      <TextInput
        onChangeText={setSenha}
        value={senha}
        placeholder="senha"
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    flex: 1,
  },

  text: {
    color: "white",
    fontSize: 50,
    marginBottom: 30,
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
});
