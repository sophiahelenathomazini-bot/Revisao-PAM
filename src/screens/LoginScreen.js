import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Ionicons, TouchableOpacity, Image} from "react-native";
import HomeScreen from "./HomeScreen";

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

    return(
        <View style={styles.login}>

          <TouchableOpacity onPress={() => navigation.goBack("Home")}>
            <Image source={require('../img/seta.png')} style={styles.seta}/>
          </TouchableOpacity>

          <Text style={styles.texto}>Acesse</Text>
          <Text style={styles.texto1}>com E-mail e senha</Text>

          <Text style={styles.texto2}>E-mail</Text>
          <TextInput style={styles.input}
            placeholder="Digite seu E-mail"
            placeholderTextColor='gray'
            onChangeText={setEmail}
            value={email}
          />

          <Text style={styles.texto2}>Senha</Text>
          <TextInput style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor='gray'
            onChangeText={setSenha}
            value={senha}
            secureTextEntry = {true}
          />

          <TouchableOpacity>
            <Text style={styles.texto3}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.texto4}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate("Registration")}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
          </View>

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

export default LoginScreen;

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
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    gap: 10,
    height: 55,
  },
  btn1: {
    backgroundColor: '#00e47a',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  btn2: {
    backgroundColor: '#fff',
    borderRadius: 7,
    borderColor: '#00e47a',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  linhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
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