
import React, {useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//Importando dependencias Expo
import * as Linking from 'expo-linking';
import HomeScreen from './screens/HomeScreens'
import SettingScreen from './screens/SettingsScreens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const prefix = Linking.makeUrl('/');
const Stack = createStackNavigator();
export default function App() {
  const [data, setData] = useState('');

  const linking = {
    prefixes:[prefix],
    config:{
      screens:{
        Home:"home",
        Settings:"settings",

      },
    },
  };

  function handleDeepLink(event){
  let data = Linking.parse(event.url);
  setData(data);
}
  // funcionando via URL exp://
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

    <NavigationContainer linking ={linking}>
      <Stack.Navigator >
        {console.log(JSON.stringify(data))}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
      
    </NavigationContainer> 










  
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
