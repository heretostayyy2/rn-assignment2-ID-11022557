import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is <Text style={styles.bold}>Natahniel Ahinakwa</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',  // Change the background color here
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,  // Increase the font size
  },
  bold: {
    fontWeight: 'bold',  // Make the name bold
  },
});
