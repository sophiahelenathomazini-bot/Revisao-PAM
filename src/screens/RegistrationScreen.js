import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Ionicons, TouchableOpacity, Image} from "react-native";
import LoginScreen from "./LoginScreen";

const RegistrationScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [criar, setCriar] = useState('');
  const [repetir, setRepetir] = useState('');

    return(
        <View style={styles.login}>

          <TouchableOpacity onPress={() => navigation.goBack("Login")}>
          <Image source={require('../img/seta.png')} style={styles.seta}/>
          </TouchableOpacity>

          <Text style={styles.texto}>Cadastre-se</Text>
          <Text style={styles.texto1}>Informe seu E-mail e crie uma senha</Text>

          <Text style={styles.texto2}>E-mail</Text>
          <TextInput style={styles.input}
            placeholder="Digite seu E-mail"
            placeholderTextColor='gray'
            onChangeText={setEmail}
            value={email}
          />

          <Text style={styles.texto2}>Crie uma senha</Text>
          <TextInput style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor='gray'
            onChangeText={setCriar}
            value={criar}
            secureTextEntry = {true}
          />

          <Text style={styles.texto2}>Repita a senha</Text>
          <TextInput style={styles.input}
            placeholder="Repita sua senha"
            placeholderTextColor='gray'
            onChangeText={setRepetir}
            value={repetir}
            secureTextEntry = {true}
          />

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.texto4}>Cadastrar</Text>
            </TouchableOpacity>

          <View style={styles.linhaContainer}>
            <View style={styles.linha}></View>
            <Text style={styles.texto5}>Ou continue com</Text>
            <View style={styles.linha}></View>
          </View>

          <View style={styles.iconsContainer}>
            <Image style={styles.icons} source={require('../img/Google.png')} />
            <Image style={styles.icons} source={require('../img/Facebook.png')} />
          </View>

        </View>
    );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 30,
  },

  input: {
    backgroundColor: '#eeeeeeab',
    borderWidth: 1,
    borderColor:'#eeeeeeab',
    borderRadius: 5,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    textAlign: 'left',
  },
  texto: {
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 20,
  },
  texto1: {
    fontSize: 11,
  },
  texto2: {
    marginTop: 20,
  },
  texto3: {
    textAlign: 'right',
    width: '100%',
    marginTop: 20,
  },
  texto4: {
    color: '#fff',
  },
  btn: {
    backgroundColor: '#00e47a',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 90,
  },
  linhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#808080',
  },
  texto5: {
    marginHorizontal: 10,
    color: '#808080',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  icons: {
    width: 50,
    height: 50,
  },
  seta: {
    width: 20,
    height: 20,
    marginTop: 30,
  },
});