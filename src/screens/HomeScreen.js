import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Image source={require('../img/casual_dog.png')} style={styles.dog} />
      <Text style={styles.text1}>Ótimo dia!</Text>
      <Text style={styles.text2}>Como deseja acessar?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Image source={require('../img/Google.png')} style={styles.go} />
        <Text style={styles.text3}>Como deseja acessar?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Register")}>
        <Text style={styles.text4}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dog: {
    width: '100%',
    height: 239,
  },
  go: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text1: {
    fontSize: 30,
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    fontSize: 10,
    color: '#000',
    flex: 0.1,
  },
  text3: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
  text4: {
    fontSize: 10,
    color: '#000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00e47a',
    padding: 5,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%'
  },
  button1: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 1,
    borderColor: '#00e47a',
    borderRadius: 7,
    alignItems: 'center',
    width: '80%'
  },
});