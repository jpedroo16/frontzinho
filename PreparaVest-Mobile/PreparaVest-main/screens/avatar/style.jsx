import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontFamily: 'KollektifBold',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  changeAvatarButton: {
    backgroundColor: '#38B6FF',
    padding: 10,
    borderRadius: 5,
  },
  changeAvatarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'KollektifBold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeModalButton: {
    backgroundColor: '#38B6FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeModalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'KollektifBold',
  },
});

export const avatarStyles = StyleSheet.create({
  modalAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
});
