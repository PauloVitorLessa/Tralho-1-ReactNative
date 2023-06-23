import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../pages/Home";
import Login from "../pages/Login";

import HomeEditoras from "../pages/HomeEditoras";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Editoras"
        component={HomeEditoras}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-library" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
