import React from "react";
import { Text, StyleSheet, TextInput, Button, View, KeyboardAvoidingView} from "react-native";
import { Header } from "../../components/header/header.components";
import { FindCep } from "./components/searchAddress/findCep";
import { ResultAddress } from "./components/searchAddress/resultAddress";
import { Stepper } from "./components/stepper/stepper";
import { BreadrCrumb, ReportWrapper } from "./report.style";

export function Report({ navigation }) {

  const [step, setStep] = React.useState(1);
  const [address, setAddress] = React.useState({});
  React.useEffect(() => {
  setStep(1)
  }, []);

  React.useEffect(() => {
    if(address?.cep) {
      setStep(2);
    }
  }, [address]);
  
  return (
    <KeyboardAvoidingView
      behavior="position"
    >
      <Header navigation={navigation} />
      <ReportWrapper>
        <BreadrCrumb>
          <Text>{`Página incial > `}</Text>
          <Text style={StyleSheet.create({ fontWeight: "bold" })}>
            Reportar vazamento
          </Text>
        </BreadrCrumb>

        <Stepper numberActive={step} />
        { step === 1 &&  <FindCep setStep={setStep} setAddress={setAddress} />}
        { (step === 2 && address.cep) &&  <ResultAddress setStep={setStep} address={address} />}
      </ReportWrapper>
    </KeyboardAvoidingView>
  );
}
