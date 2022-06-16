import React from "react";
import { View, StyleSheet } from "react-native";
import {
  StepperWrapper,
  StepperCircle,
  StepperCircleText,
  StepperBoxItem,
  StepperDescritionItem,
} from "./stepper.style";

export function Stepper({ numberActive }) {
  return (
    <StepperWrapper>

      <StepperBoxItem>
        <StepperCircle active>
          <StepperCircleText active>1</StepperCircleText>
        </StepperCircle>
        <StepperDescritionItem>Endereço do vazamento</StepperDescritionItem>
      </StepperBoxItem>

      <StepperBoxItem>
        <StepperCircle  active={numberActive === 3 || numberActive === 4 || numberActive === 5 }>
          <StepperCircleText active={numberActive === 3 || numberActive === 4 || numberActive === 5}>2</StepperCircleText>
        </StepperCircle>
        <StepperDescritionItem>Volume do vazamento</StepperDescritionItem>
      </StepperBoxItem>

      <StepperBoxItem>
        <StepperCircle  active={numberActive === 4 || numberActive === 5}>
          <StepperCircleText  active={numberActive === 4 || numberActive === 5}>3</StepperCircleText>
        </StepperCircle>
        <StepperDescritionItem>Informações de contato</StepperDescritionItem>

      </StepperBoxItem>

    </StepperWrapper>
  );
}
