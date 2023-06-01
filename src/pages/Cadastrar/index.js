import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import config from "../../../config/config.json";

export default function Cadastrar() {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [nome, setNome] = useState(null);
  const [message, setMessage] = useState(null);

  // Envia os dados do formulário para o backend
  async function cadastrarUsuario() {
    try {
      const response = await fetch(config.urlRootNode + 'create', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailUser: email,
          senhaUser: senha,
          nomeUser: nome
        })
      });

      const data = await response.json();
      setMessage(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastro</Text>
      </Animatable.View>

      {message && <Text>{message}</Text>}

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
        />

        <Text style={styles.title}>Nome Completo</Text>
        <TextInput
          placeholder="Nome completo"
          style={styles.input}
          onChangeText={(text) => setNome(text)}
        />

        <TouchableOpacity style={styles.button} onPress={cadastrarUsuario}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerHeader: {
    marginTop: '5%',
    marginBottom: '5%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 10,
    marginTop: 18,
  },
  input: {
    borderBottomWidth: 1,
    height: 20,
    marginBottom: 12,
    fontSize: 10,
  },
  button: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});