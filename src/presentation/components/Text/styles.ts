import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SizeType, WeightType } from '.';

enum SizeEnum {
  lg = 45,
  md = 30,
  'md2' = 20,
  sm = 12,
  xsm = 11,
}

enum WeightEnum {
  normal = 'Roboto-Regular',
  medium = 'Roboto-Medium',
  bold = 'Roboto-Bold',
}

interface TextProps {
  size: SizeType;
  weight: WeightType;
  color: string;
}

export const TextComponent = styled.Text<TextProps>`
  font-size: ${({ size }) => RFValue(SizeEnum[size])}px;
  font-family: ${({ weight }) => WeightEnum[weight]};
  color: ${({ color }) => color};
`;
