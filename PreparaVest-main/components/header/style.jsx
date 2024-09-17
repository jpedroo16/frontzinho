import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  cabecalho: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#38B6FF',
    paddingVertical: 10,
    height:100,
  },

  ImagemLogo: {
    height: 130,
    width: 160,
  },

  subtitulo: {
   
    fontSize: 20,
    flexDirection: 'row',
    gap: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pesquisa: {
    
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 350,
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
  },

  perfilmodal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },

  titulomodal: {
    fontSize: 25,
    fontFamily: 'KollektifBold',
    marginBottom: 10,
  },

  titulomodal1: {
    fontSize: 20,
    fontFamily: 'Kollektif',
    marginBottom: 30,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38B6FF',
    height: '70%',
    width: '50%',
    borderRadius: 5,
  },

  avatarmodal: {
    height: '100%',
    width: '100%',
    backgroundColor: '#38B6FF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imagemavatar: {
    borderRadius: 7,
    height: '30%',
    width: '20%',
  },

  textomodal: {
    fontSize: 20,
    fontFamily: 'Kollektif',
  },

  botal: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    fontFamily: 'Kollektif',
  },

  icone: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '90%',
  },

  menu: {
    position: 'absolute',
    top: 80, // Ajuste conforme a altura do cabeçalho para posicionar logo abaixo
    left:0,
    backgroundColor: '#fff',
    padding: 15,
    borderBottomRightRadius: 5,
    zIndex:1
  },

  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
  
  },
  menuOverlay: {
    flex: 1,
   
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }
});
