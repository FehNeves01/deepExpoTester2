import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//Importando dependencias Expo
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function App() {

  const [data, setData] = useState('');

  function handleDeepLink(event){
  let data = Linking.parse(event.url);
  setData(data);
}

  useEffect(()=>{
    async function getInicialURL(){
      const inicialURL = await Linking.getInitialURL();
      if(inicialURL) setData(Linking.parse(inicialURL))
    }

    Linking.addEventListener("url", handleDeepLink);
    if(!data){
      getInicialURL();
    }
    
    return(()=>{
      Linking.removeEventListener("url");
    })
  },[]);

  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <View style={styles.viewBtn}>
        <Text>{data? JSON.stringify(data): "app not opened from deep link "}</Text>
      </View>
      <View style={styles.viewBtn}>
        <Button  title="Open With Link" onPress={() => Linking.openURL("https://github.com/FehNeves01")} />
        <Button title="Open Web Browser" onPress={() => WebBrowser.openBrowserAsync('https://github.com/FehNeves01')} />
      </View>
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
  viewBtn: {
    marginTop: 15,
  }
});
