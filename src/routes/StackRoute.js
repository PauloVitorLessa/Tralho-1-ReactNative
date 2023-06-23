import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Editora from "../pages/Editora";
import HomeEditoras from "../pages/HomeEditoras";
import Livro from "../pages/Livro";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Editora" component={Editora} />
      <Stack.Screen name="Editoras" component={HomeEditoras} />
      <Stack.Screen name="Livro" component={Livro} />
    </Stack.Navigator>
  );
}
