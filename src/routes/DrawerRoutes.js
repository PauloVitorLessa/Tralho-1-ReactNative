import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../pages/Home";
import Login from "../pages/Login";

import HomeEditoras from "../pages/HomeEditoras";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Editoras"
        component={HomeEditoras}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="local-library" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
