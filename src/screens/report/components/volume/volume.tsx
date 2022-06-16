import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import volume1 from "./../../../../assets/volum1.png";
import volume2 from "./../../../../assets/volume2.png";
import volume3 from "./../../../../assets/volume3.png";
import { VolumeButtonWrapper, ButtonsVolumeWrapper } from "./volume.style";

export function Volume({ setStep }) {
  return (
    <View>
      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 48,
          marginTop: 10,
        })}
      >
        Volume do vazamento
      </Text>

      <Text
        style={StyleSheet.create({
          fontWeight: "bold",
          fontSize: 20,
          marginTop: "10%",
          marginBottom: 10,
        })}
      >
        Qual o volume do vazamento que deseja reportar?
      </Text>
      <ButtonsVolumeWrapper>
        <TouchableOpacity onPress={() => setStep(4)}>
          <VolumeButtonWrapper>
            <Text
              style={StyleSheet.create({ fontWeight: "bold", fontSize: 16 })}
            >
              Se continuar, vai acabar a água do mundo.
            </Text>
            <Image source={volume1} />
          </VolumeButtonWrapper>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setStep(4)}>
          <VolumeButtonWrapper>
            <Text
              style={StyleSheet.create({ fontWeight: "bold", fontSize: 16 })}
            >
              Se continuar, vai alagar a rua.
            </Text>
            <Image source={volume2} />
          </VolumeButtonWrapper>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setStep(4)}>
          <VolumeButtonWrapper>
            <Text
              style={StyleSheet.create({ fontWeight: "bold", fontSize: 16 })}
            >
              Se continuar, vai virar uma poça.
            </Text>
            <Image source={volume3} />
          </VolumeButtonWrapper>
        </TouchableOpacity>
      </ButtonsVolumeWrapper>
    </View>
  );
}
