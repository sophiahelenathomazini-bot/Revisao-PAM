import React, {useEffect} from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

const FisrtScreen = ({navigation}) =>{

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Home");
        }, 1000);
        return () => clearTimeout(timer);
    },
    [navigation]);

    return (
        <View style={styles.first}>
            <TouchableOpacity>
                <Image source={require('../img/logotipo.png')} />
            </TouchableOpacity>
        </View>
    );
}

export default FisrtScreen;

const styles = StyleSheet.create({
  first: {
    flex: 1,
    backgroundColor: '#00e47a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});