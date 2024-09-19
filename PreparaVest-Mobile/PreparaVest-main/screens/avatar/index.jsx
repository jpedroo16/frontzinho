import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { avatarStyles, profileStyles } from './style';
import * as Font from 'expo-font';
import KollektifBold from '../../assets/fonts/Kollektif-Bold.ttf';
import Kollektif from '../../assets/fonts/Kollektif.ttf';

const avatarImages = [
  require('../../assets/avatares/1.png'),
  require('../../assets/avatares/2.png'),
  require('../../assets/avatares/3.png'),
  require('../../assets/avatares/4.png'),
  require('../../assets/avatares/5.png'),
  require('../../assets/avatares/6.png'),
  require('../../assets/avatares/7.png'),
  require('../../assets/avatares/8.png'),
  require('../../assets/avatares/9.png'),
  require('../../assets/avatares/10.png'),
  require('../../assets/avatares/12.png'),
  require('../../assets/avatares/13.png'),
  require('../../assets/avatares/14.png'),
  require('../../assets/avatares/15.png'),
  require('../../assets/avatares/16.png'),
];

const UserProfile = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(avatarImages[0]);

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

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setModalVisible(false);
  };

  if (!fontsLoaded) {
    return null; // Ou um componente de carregamento
  }

  return (
    <View style={profileStyles.container}>
      {/* Header */}
      <View style={profileStyles.header}>
        <Text style={profileStyles.headerTitle}>Perfil do Usuário</Text>
      </View>

      {/* Avatar and Edit Profile Button */}
      <View style={profileStyles.avatarContainer}>
        <Image source={selectedAvatar} style={profileStyles.avatar} />
        <TouchableOpacity
          style={profileStyles.changeAvatarButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={profileStyles.changeAvatarButtonText}>Mudar Avatar</Text>
        </TouchableOpacity>
      </View>

      

      

      {/* Avatar Selection Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={profileStyles.modalContainer}>
          <FlatList
            data={avatarImages}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleAvatarSelect(item)}>
                <Image source={item} style={avatarStyles.modalAvatar} />
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={profileStyles.closeModalButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={profileStyles.closeModalButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default UserProfile;
