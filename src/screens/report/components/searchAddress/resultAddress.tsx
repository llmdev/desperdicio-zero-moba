import { View, Text, StyleSheet, Button } from 'react-native';

export function ResultAddress({ setStep, address }) {
  return (
    <View>
      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 48,
          marginTop: 10,
        })}
      >
        Confirme o endereço
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 20,
          marginTop: "10%",
        })}
      >
        O endereço informado está correto?
      </Text>

      <View style={StyleSheet.create({ backgroundColor: '#DCDCDC', padding: 16, borderRadius: 5, marginTop: 32, marginBottom: 20})}>
        <View style={StyleSheet.create({ flexDirection: 'row'})} >
          <Text style={StyleSheet.create({ fontWeight: "bold", marginRight: 5, fontSize: 16})}>CEP:</Text>
          <Text style={StyleSheet.create({ fontSize: 16})}>{address.cep}</Text>
        </View>

         <View style={StyleSheet.create({ flexDirection: 'row'})} >
          <Text style={StyleSheet.create({ fontWeight: "bold", marginRight: 5, fontSize: 16})}>Rua:</Text>
          <Text style={StyleSheet.create({ fontSize: 16})}>{address.logradouro}</Text>
        </View>

         <View style={StyleSheet.create({ flexDirection: 'row'})} >
          <Text style={StyleSheet.create({ fontWeight: "bold", marginRight: 5, fontSize: 16})}>Bairro:</Text>
          <Text style={StyleSheet.create({ fontSize: 16})}>{address.bairro}</Text>
        </View>

         <View style={StyleSheet.create({ flexDirection: 'row'})} >
          <Text style={StyleSheet.create({ fontWeight: "bold", marginRight: 5, fontSize: 16})}>Cidade:</Text>
          <Text style={StyleSheet.create({ fontSize: 16})}>{address.localidade}</Text>
        </View>

         <View style={StyleSheet.create({ flexDirection: 'row'})} >
          <Text style={StyleSheet.create({ fontWeight: "bold", marginRight: 5, fontSize: 16})}>Estado:</Text>
          <Text style={StyleSheet.create({ fontSize: 16})}>{address.uf}</Text>
        </View>    

      </View>

       <Button  title="Sim, continuar" >Sim, continuar</Button>
       <Button  title="Não, editar" onPress={() => setStep(1)} >Não, editar</Button>
    </View>
  )
}