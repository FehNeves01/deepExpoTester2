import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Importando dependencias Expo
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <button title="Open With Link" onPress={() => Linking.openURL('https://github.com/FehNeves01')} />
      <button title="Open Web Browser" onPress={() => WebBrowser.openBrowserAsync('https://github.com/FehNeves01')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
