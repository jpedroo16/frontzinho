import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1E90FF',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: '80%', // Logo ocupa 80% da largura da tela
    height: undefined,
    aspectRatio: 2.5, // Proporção da imagem para manter o formato
    resizeMode: 'contain', // Mantém a proporção da imagem
    marginBottom: 10,
  },
  navMenu: {
    flexDirection: 'row',
    marginTop: 10,
  },
  navItem: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  },
  introSection: {
    padding: 20,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  contentSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  contentCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  contentCard: {
    backgroundColor: '#F9F9F9',
    width: '30%',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  statsSection: {
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  statsCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsCard: {
    backgroundColor: '#fff',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  statsText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  tipsSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  tipCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  tipCard: {
    backgroundColor: '#F9F9F9',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
  },
  tipText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#1E90FF',
    padding: 20,
    alignItems: 'center',
  },
  footerMenu: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerLink: {
    color: '#fff',
    fontSize: 14,
    marginHorizontal: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;
