import Home from "./src/pages/Home/index";
import Login from "./src/pages/Login";
import Editora from "./src/pages/Editora";
import "react-native-gesture-handler";
import { DataProvider } from "./src/context/DataContext";
import { EditoraProvider } from "./src/context/EditoraContext";
import { LivroProvider } from "./src/context/LivroContext";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <EditoraProvider>
        <LivroProvider>
          <NavigationContainer>
            {/* screenOptions={{ headerShown: false }} */}
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Editora" component={Editora} />
            </Stack.Navigator>
          </NavigationContainer>
        </LivroProvider>
      </EditoraProvider>
    </DataProvider>
  );
}
