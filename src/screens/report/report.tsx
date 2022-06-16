import React from "react";
import { Text, StyleSheet, TextInput, Button, View, KeyboardAvoidingView} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../../components/header/header.components";
import { Contact } from "./components/contact/contact";
import { Finish } from "./components/finish/finish";
import { FindCep } from "./components/searchAddress/findCep";
import { ResultAddress } from "./components/searchAddress/resultAddress";
import { Stepper } from "./components/stepper/stepper";
import { Volume } from "./components/volume/volume";
import { BreadrCrumb, ReportWrapper } from "./report.style";

export function Report({ navigation }) {

  const [step, setStep] = React.useState(1);
  const [address, setAddress] = React.useState({});

  React.useEffect(() => {
    if(address?.cep) {
      setStep(2);
    }
  }, [address]);
  
  return (
    <KeyboardAvoidingView
      behavior="position"
    >

      <ScrollView>
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
        { (step === 3 ) &&  <Volume setStep={setStep} />}
        { (step === 4 ) &&  <Contact setStep={setStep} />}
        { (step === 5 ) &&  <Finish setStep={setStep} setAddress={setAddress} />}
      </ReportWrapper>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
