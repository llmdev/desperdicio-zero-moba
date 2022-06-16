import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

export function Finish({ setStep,setAddress }) {
  return (
    <View>
       <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 48,
          marginTop: 10,
        })}
      >
        Reportado com sucesso!
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 20,
          marginTop: "10%",
          marginBottom: 10,
        })}
      >
        A sua denúncia de vazamento de água foi concluída. Vamos entrar em contato com as autoridades locais e informa-las sobre a ocorrência.
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 20,
          marginTop: "10%",
          marginBottom: 10,
        })}
      >
        Agradecemos a sua contribuição!
      </Text>

       <Button title="Finalizar" onPress={() => {setStep(1); setAddress({})}}>Finalizar</Button>
    </View>
  )
}