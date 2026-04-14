import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function App() {

  const [modalAberto, setModalAberto] = useState(false);
  const [imgAtual, setImgAtual] = useState(null);

  const abrirImagem = (img) => {
    setImgAtual(img);
    setModalAberto(true);
  };

  const fecharImagem = () => {
    setModalAberto(false);
    setImgAtual(null);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Memes</Text>

      <View style={styles.linha}>
        <TouchableOpacity onPress={() => abrirImagem(require('./assets/abel.jpg'))}>
          <Image source={require('./assets/abel.jpg')} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => abrirImagem(require('./assets/neymar.webp'))}>
          <Image source={require('./assets/neymar.webp')} style={styles.img} />
        </TouchableOpacity>
      </View>

      <View style={styles.linha}>
        <TouchableOpacity onPress={() => abrirImagem(require('./assets/palmeiras.jpeg'))}>
          <Image source={require('./assets/palmeiras.jpeg')} style={styles.img} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => abrirImagem(require('./assets/iadesistir.jfif'))}>
          <Image source={require('./assets/iadesistir.jfif')} style={styles.img} />
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={modalAberto}
        onRequestClose={fecharImagem}
      >
        <BlurView intensity={80} tint="dark" style={styles.modalFundo}>
          
          <View style={styles.modalBox}>
            
            <TouchableOpacity onPress={fecharImagem} style={styles.btnFechar}>
              <Icon name="close" size={30} color="#fff" />
            </TouchableOpacity>

            <Image source={imgAtual} style={styles.imgModal} />

          </View>

        </BlurView>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 35,
  },

  linha: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },

  img: {
    width: 140,
    height: 140,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#0A1F44',
  },

  modalFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: 280,
    height: 320,
    backgroundColor: '#2E2E2E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imgModal: {
    width: 240,
    height: 240,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#0A1F44',
    marginTop: 20,
  },

  btnFechar: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
});