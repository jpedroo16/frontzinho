import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Certifique-se que está instalado
import { styles } from './style';

const years = [
  { year: '2023' },
  { year: '2022' },
  { year: '2021' },
  { year: '2020' },
  { year: '2019' },
  { year: '2018' },
  { year: '2017' },
  { year: '2016' },
  { year: '2015' },
  { year: '2014' },
  { year: '2013' },
  { year: '2012' },
];

const ExamScreen = () => {
  const renderYearCard = ({ item }) => (
    <View style={styles.card}>
    
      
      <Text style={styles.yearText}>{item.year}</Text>

      <View style={styles.iconsContainer}>
        <Icon name="book" size={30} color="'#38B6FF'" />
        <Icon name="calculate" size={30} color="'#38B6FF'" />
        <Icon name="science" size={30} color="'#38B6FF'" />
        <Icon name="language" size={30} color="'#38B6FF'" />
      </View>

      {/* O botão "Ver Prova" também precisa ter um <Text> dentro */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Prova</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Provas Anteriores</Text>
        <Icon name="filter-list" size={30} color="#FFF" style={styles.filterIcon} />
      </View>

      {/* Caixa de busca precisa de <TextInput> */}
      <TextInput 
        style={styles.searchInput} 
        placeholder="Buscar prova" 
        placeholderTextColor="#AAA" 
      />

      <FlatList
        data={years}
        renderItem={renderYearCard}
        keyExtractor={item => item.year}
        contentContainerStyle={styles.list}
      />

      <TouchableOpacity style={styles.simuladoButton}>
        {/* Botão de simulado com <Text> */}
        <Text style={styles.simuladoButtonText}>Fazer Simulado</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExamScreen;