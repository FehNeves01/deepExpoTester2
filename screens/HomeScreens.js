import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';



const HomeScreen = (props) => {

    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>HomeScreen</Text>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <StatusBar style="auto" />
                <View style={styles.viewBtn}>
                    {/* <Text>{data ? JSON.stringify(data) : "app not opened from deep link "}</Text> */}
                </View>
                <View style={styles.viewBtn}>
                    <Button title="Open With Link" onPress={() => Linking.openURL("https://github.com/FehNeves01")} />
                    <Button title="Open Web Browser" onPress={() => WebBrowser.openBrowserAsync('https://github.com/FehNeves01')} />
                </View>
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

export default HomeScreen;
