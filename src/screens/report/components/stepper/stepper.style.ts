import styled from 'styled-components/native';

export const StepperWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10%;
`;

export const StepperCircle = styled.View<{active: boolean}>`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({ theme, active }) => active ? theme.colors.primary : '#DCDCDC' };
`

export const StepperCircleText= styled.Text<{active: boolean}>`
  color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.gray};
  font-size: 20px;
  font-weight: bold;
`

export const StepperBoxItem = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const StepperDescritionItem = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-top: 10px;
`