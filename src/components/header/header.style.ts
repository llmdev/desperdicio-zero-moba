import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export const HeaderWrapper = styled.View`
  margin-top: ${StatusBar.currentHeight}px;
  padding: 15px;
  height:71px;
  elevation: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`