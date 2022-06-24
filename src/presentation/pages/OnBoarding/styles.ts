import styled from 'styled-components/native';
import ImageBG from '../../assets/images/onBoarding-bg.png';
import LogoImg from '../../assets/images/Logo.png';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background: ${({ theme }) => theme?.blue};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageBg = styled.Image.attrs({
  source: ImageBG,
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.Image.attrs({
  source: LogoImg,
})`
  margin-right: ${RFValue(12)}px;
`;
