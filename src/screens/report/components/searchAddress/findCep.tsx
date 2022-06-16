import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Keyboard, ActivityIndicator } from "react-native";

export function FindCep({setStep, setAddress}) {
  const [cep, setCep] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  function findCep() {
    Keyboard.dismiss();
    setLoading(true);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then( data => data.json()).then(data =>{
      setAddress(data);
      setLoading(false);
    });
  }

  return (
    <View>
      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 20,
          marginTop: "10%",
        })}
      >
        Onde está o vazamento?
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 48,
          marginTop: 10,
        })}
      >
        Busque o endereço
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 32,
          marginBottom: 5,
        })}
      >
        CEP
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
        placeholder="00000-000"
        onChangeText={(newText) => setCep(newText)}
        keyboardType="number-pad"
      />
      { !loading && <Button disabled={cep.length < 7} title="Avançar" onPress={findCep}>Avançar</Button>}
      { loading && <ActivityIndicator size="large" color="#0097F5" />}
    </View>
  );
}
