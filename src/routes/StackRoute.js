import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Editora from "../pages/Editora";
import HomeEditoras from "../pages/HomeEditoras";
import Livro from "../pages/Livro";
import DrawerRoutes from "./DrawerRoutes";

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
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
      <Stack.Screen name="Editora" component={Editora} />
      <Stack.Screen name="Editoras" component={HomeEditoras} />
      <Stack.Screen name="Livro" component={Livro} />
    </Stack.Navigator>
  );
}
