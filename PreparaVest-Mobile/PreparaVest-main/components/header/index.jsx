import React, { useState, useEffect } from "react";
import { Text, View, Image, Modal, Pressable, Alert, TouchableOpacity, StatusBar } from "react-native";
import { style } from "./style";
import { Icon } from "react-native-elements";
import Avatar from "../../screens/avatar";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";

import KollektifBold from "../../assets/fonts/Kollektif-Bold.ttf";
import Kollektif from "../../assets/fonts/Kollektif.ttf";

export default function Cabecalho() {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar o menu

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

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={style.cabecalho}>
        {/* Ícone de hambúrguer para abrir/fechar o menu */}
        <Pressable onPress={toggleMenu} style={{ marginLeft: 15 }}>
          <Icon name="menu" type="material" color="#000" />
        </Pressable>

        <Image
          style={style.ImagemLogo}
          source={require("../../assets/LogoPreparaVest.png")}
        />

        <Pressable onPress={() => navigation.navigate("avatar")}>
          <Icon name="person" type="material" color="#000" />
        </Pressable>

        {/* Menu suspenso usando Modal */}
        {menuVisible && (
          <Modal
            animationType="none"
            transparent={true}
            visible={menuVisible}
            onRequestClose={closeMenu}
          >
            {/* Overlay para fechar o menu ao tocar fora */}
            <TouchableOpacity style={style.menuOverlay} onPress={closeMenu}>
              <View style={[style.menu, { zIndex: 10, position: 'absolute' }]}>
                <Pressable onPress={() => { closeMenu(); navigation.navigate("Home"); }}>
                  <Text style={style.menuItem}>Home</Text>
                </Pressable>
                <Pressable onPress={() => { closeMenu(); navigation.navigate("Pagina Enem"); }}>
                  <Text style={style.menuItem}>Provas</Text>
                </Pressable>
                <Pressable onPress={() => { closeMenu(); navigation.navigate("Informacoes"); }}>
                  <Text style={style.menuItem}>Informações gerais</Text>
                </Pressable>
                <Pressable onPress={() => { closeMenu(); navigation.navigate("Conteudo relevante"); }}>
                  <Text style={style.menuItem}>Conteúdo relevante</Text>
                </Pressable>
                <Pressable onPress={() => { closeMenu(); navigation.navigate("Questoes"); }}>
                  <Text style={style.menuItem}>Dicas de estudos</Text>
                </Pressable>
                <Pressable onPress={() => { closeMenu(); navigation.navigate("Prepare-se"); }}>
                  <Text style={style.menuItem}>Estatísticas</Text>
                </Pressable>
              </View>
            </TouchableOpacity>
          </Modal>
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={style.perfilmodal}>
            <View style={style.modal}>
              <Text style={style.titulomodal}>Perfil</Text>
              <Image
                source={require("../../assets/avatares/perfil-de-usuario.png")}
                style={style.imagemavatar}
              />
              <Text style={style.textomodal}>Nome</Text>
              <Text style={style.textomodal}>Email usuario</Text>
              <Pressable
                onPress={() => setModalVisible1(true)}
                style={style.botal}
              >
                <Text>Alterar foto</Text>
              </Pressable>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible1(!modalVisible1);
                }}
              >
                <View style={style.avatarmodal}>
                  <Avatar />
                  <Pressable onPress={() => setModalVisible1(!modalVisible1)}>
                    <Text style={style.titulomodal1}>
                      Voltar a página anterior
                    </Text>
                  </Pressable>
                </View>
              </Modal>
              <Pressable style={style.botal}>
                <Text>Sair da conta</Text>
              </Pressable>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text style={style.titulomodal1}>Voltar à página anterior</Text>
              </Pressable>

              <View style={style.icone}>
                <Icon name="logout" type="material" color="#000" />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
