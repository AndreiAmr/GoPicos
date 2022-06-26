import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ theme }) => theme.borderBottom};
  padding: ${RFValue(5)}px;
  margin: ${RFValue(7.5)}px ${RFValue(7)}px;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
