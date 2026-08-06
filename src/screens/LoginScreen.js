import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function obterEmail () {
    setEmail = (`${email}`)
  }

  function obterSenha () {
    setEmail = (`${senha}`)
  }

    return(
        <View style={styles.login}>
            <Text style={styles.texto}>Acesso</Text>
            <Text style={styles.texto1}>com E-mail e senha</Text>
            <TextInput style={styles.input}
              placeholder="Digite seu E-mail"
              placeholderTextColor='gray'
              onChange={setEmail}
              value={email}
            />
            <TextInput style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor='gray'
              onChange={setSenha}
              value={senha}
            />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    
  }
});