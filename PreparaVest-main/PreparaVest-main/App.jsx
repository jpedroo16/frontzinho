
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Paginaprincipal from './screens/pp/index.jsx'
import HomeScreen from "./screens/home/index.jsx";
import PaginaEnem from "./screens/pgENEM/index.jsx";
import Informacoes from "./screens/InfoGerais/index.jsx";
import Conteudorel from "./screens/ContRelevante/index.jsx";
import { Questoes } from "./screens/Questoes/index.jsx";
import { Professores } from "./screens/Professores/index.jsx";
import Login from "./screens/Login/index.jsx";
import Cadastro from "./screens/Cadastro/index.jsx";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pagina principal" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Conteudo relevante" component={Conteudorel}/>
        <Stack.Screen name="Questoes" component={Questoes} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Informacoes" component={Informacoes} />
        <Stack.Screen name="Pagina Enem" component={PaginaEnem} />
        <Stack.Screen name="Prepare-se" component={Professores} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Pagina principal" component={Paginaprincipal} />


      </Stack.Navigator>
    </NavigationContainer>
)}
