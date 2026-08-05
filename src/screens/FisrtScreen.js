import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const FisrtScreen = ({navigation}) =>{
    return (
        <View style={styles.first}>
            <TouchableOpacity
                onPress={() =>{
                    navigation.navigation("Home")
                }}
            >
                <Image source={require('../img/logotipo.png')} />
            </TouchableOpacity>
        </View>
    );
}

export default FisrtScreen;

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#4dff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});