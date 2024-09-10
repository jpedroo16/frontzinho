import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { Prof } from "./style";
import Cabecalho from "../../components/header";
import FooterComponent from "../../components/footer";
import { Botoes } from "../../components/Botoes";
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

export function Professores() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={Prof.root}>
        <Cabecalho />
        <View style={{ flexDirection: 'row' }}>
          <Botoes />
          <View style={{ flexDirection: 'column' }}>
            <View style={Prof.viewtitulo}>
              <Text style={Prof.tituloProf}>Professores Indicados</Text>
            </View>

            <View style={Prof.container}>
              {/* Matemática */}
              <View style={Prof.bloco}>
                <Text style={Prof.Materias}>Matemática</Text>
                <View style={Prof.espacomat}>
                  <View style={Prof.professores}>
                    <Image
                      style={Prof.Perfil}
                      source={require('../../assets/Professores/FerrettoProfile.jpg')}
                    />
                    <View>
                      <Text style={Prof.textosMaterias}>Professor Ferretto</Text>
                      <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@professorferretto')}>
                        <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                        <Text style={Prof.biografia}>
                          Somos a melhor comunidade de professores da internet, com o melhor preço do Brasil e com a missão de fazer você conquistar a sua aprovação no ENEM e Vestibulares de todo o Brasil!
                        </Text>
                      </Pressable>
                    </View>
                  </View>

                  {/* Outros professores de Matemática */}
                  {/* Repetir o bloco acima para outros professores de Matemática */}
                </View>

                {/* Física */}
                <Text style={Prof.Materias}>Física</Text>
                <View style={Prof.espacomat}>
                  <View style={Prof.professores}>
                    <Image
                      style={Prof.Perfil}
                      source={require('../../assets/Professores/PedroProfile.jpg')}
                    />
                    <View>
                      <Text style={Prof.textosMaterias}>Ciência Todo Dia</Text>
                      <Pressable onPress={() => Linking.openURL('https://www.youtube.com/@CienciaTodoDia')}>
                        <Text style={Prof.textosMaterias}>Canal Youtube</Text>
                        <Text style={Prof.biografia}>
                          Um canal totalmente voltado para assuntos que podem ser abordados no cotidiano, mantendo seu cérebro sempre ativo!
                        </Text>
                      </Pressable>
                    </View>
                  </View>

                  {/* Outros professores de Física */}
                  {/* Repetir o bloco acima para outros professores de Física */}
                </View>

                {/* Continuar com os outros professores para Química, Biologia, Português, Geografia, etc */}
              </View>
            </View>
          </View>
        </View>
      </View>
      <FooterComponent />
    </ScrollView>
  );
}
