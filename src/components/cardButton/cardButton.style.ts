import styled from 'styled-components/native';


export const CardButtonWrapper = styled.TouchableOpacity`
  width: 48%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  margin-top: 20px;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`