import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.shape};
  /* height: ${RFValue(300)}px; */
  width: ${widthPercentageToDP(90)}px;
  border-radius: ${RFValue(20)}px;

  margin: 0 auto;
  padding-bottom: ${RFValue(20)}px;
`;

export const TitleSpacer = styled.View`
  margin: ${RFValue(20)}px ${RFValue(20)}px ${RFValue(9)}px;
`;
