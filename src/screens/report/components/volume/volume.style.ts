import styled from 'styled-components/native';


export const ButtonsVolumeWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const VolumeButtonWrapper = styled.View`
  border: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`