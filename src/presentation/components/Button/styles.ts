import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: ${RFValue(5)}px;
  background: ${({ theme }) => theme.buttonPrimary};
  height: ${RFValue(44)}px;
  margin: ${RFValue(15)}px ${RFValue(7)}px 0;
  align-items: center;
  justify-content: center;
`;
