import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.boxImagem}>
        <Image
          source={require('../assets/neymar.webp')}
          style={styles.imagem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxImagem: {
    padding: 20,
    borderWidth: 5,
    borderColor: '#000',
    borderRadius: 10,
  },

  imagem: {
    width: 240,
    height: 240,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#000',
  },
});
