import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { estilo } from './style';
import * as Font from 'expo-font';
import Cabecalho from '../../components/header';
import FooterComponent from '../../components/footer';
import { useNavigation } from '@react-navigation/native';

// Importe as fontes personalizadas
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

// Componente de Acordeão Personalizado
const AccordionItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={estilo.accordionContainer}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={estilo.accordionTitle}>{title}</Text>
      </TouchableOpacity>
      {expanded && <View style={estilo.accordionContent}>{children}</View>}
    </View>
  );
};

export default function Conteudorel() {
  // Carregamento das fontes personalizadas
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        KollektifBold: KollektifBold,
        Kollektif: Kollektif,
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <ScrollView>
      <View>
        <Cabecalho />

        <View style={estilo.contentContainer}>
          <Text style={estilo.textStyle}>Conteúdo Relevante</Text>

          <AccordionItem title="Linguagens, Códigos e suas Tecnologias">
            <Text style={estilo.accordionText}>- Interpretação de textos literários e não literários.</Text>
            <Text style={estilo.accordionText}>- Gramática normativa e linguística.</Text>
            <Text style={estilo.accordionText}>- Produção textual.</Text>
            <Text style={estilo.accordionText}>- Literatura brasileira e portuguesa.</Text>
            <Text style={estilo.accordionText}>- Língua estrangeira (inglês ou espanhol).</Text>
          </AccordionItem>

          <AccordionItem title="Matemática e suas Tecnologias">
            <Text style={estilo.accordionText}>- Álgebra.</Text>
            <Text style={estilo.accordionText}>- Geometria.</Text>
            <Text style={estilo.accordionText}>- Trigonometria.</Text>
            <Text style={estilo.accordionText}>- Estatística e probabilidade.</Text>
            <Text style={estilo.accordionText}>- Análise de gráficos e tabelas.</Text>
          </AccordionItem>

          <AccordionItem title="Ciências Humanas e suas Tecnologias">
            <Text style={estilo.accordionText}>- História do Brasil e do mundo.</Text>
            <Text style={estilo.accordionText}>- Geografia política, econômica e cultural.</Text>
            <Text style={estilo.accordionText}>- Sociologia.</Text>
            <Text style={estilo.accordionText}>- Filosofia.</Text>
            <Text style={estilo.accordionText}>- Atualidades e contextos sociais.</Text>
          </AccordionItem>

          <AccordionItem title="Ciências da Natureza e suas Tecnologias">
            <Text style={estilo.accordionText}>- Biologia celular e molecular.</Text>
            <Text style={estilo.accordionText}>- Ecologia.</Text>
            <Text style={estilo.accordionText}>- Física (mecânica, termodinâmica, óptica, etc.).</Text>
            <Text style={estilo.accordionText}>- Química (química geral, orgânica e inorgânica).</Text>
            <Text style={estilo.accordionText}>- Aplicação dos conceitos científicos em situações do cotidiano.</Text>
          </AccordionItem>
        </View>
      </View>

      <FooterComponent />
    </ScrollView>
  );
}
