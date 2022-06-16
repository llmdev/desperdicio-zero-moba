import React from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Button } from 'react-native';

export function Contact({ setStep }) {

  const [nome, setNome] = React.useState();
  const [email, setEmail] = React.useState();
  const [celular, setCelular] = React.useState();

  return (
    <View>
        <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 48,
          marginTop: 10,
        })}
      >
        Dados para contato
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 20,
          marginTop: "10%",
          marginBottom: 10,
        })}
      >
        Para prosseguir, precisamos de algumas informações:
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 10,
          marginBottom: 5,
        })}
      >
        Nome
      </Text>
      <TextInput
        style={{
          height: 51,
          backgroundColor: "#DCDCDC",
          borderRadius: 5,
          fontSize: 16,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Insira seu nome"
        onChangeText={(newText) => setNome(newText)}
        keyboardType="default"
      />

       <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 10,
          marginBottom: 5,
        })}
      >
        E-mail
      </Text>
      <TextInput
        style={{
          height: 51,
          backgroundColor: "#DCDCDC",
          borderRadius: 5,
          fontSize: 16,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="email@email.com"
        onChangeText={(newText) => setEmail(newText)}
        keyboardType="email-address"
      />

        <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 10,
          marginBottom: 5,
        })}
      >
        Celular
      </Text>
      <TextInput
        style={{
          height: 51,
          backgroundColor: "#DCDCDC",
          borderRadius: 5,
          fontSize: 16,
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Celular"
        onChangeText={(newText) => setCelular(newText)}
        keyboardType="phone-pad"
      />

      <Text style={StyleSheet.create({ textAlign: 'center', marginTop: 20, marginBottom: 20})}> Ao reportar você estará concordando com a nossa política de prividade e os termos de uso da nossa plataforma. </Text>

      <Button disabled={!nome || !email || !celular} title="Concluir" onPress={() => setStep(5)}>Concluir</Button>


    </View>
  )
}