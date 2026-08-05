import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <Image source={require('../img/casual_dog.png')} />
      <Text>Ótimo dia!</Text>
      <Text>Come deseja acessar?</Text>
      <TouchableOpacity>
        <Image source={require('../img/Google.png')} />
        <Text>Como deseja acessar?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Outras opções</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#4dff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});