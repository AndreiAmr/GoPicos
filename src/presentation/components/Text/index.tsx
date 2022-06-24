import React from 'react';
import * as S from './styles';

export type SizeType = 'lg' | 'md' | 'sm' | 'xsm';
export type WeightType = 'normal' | 'medium' | 'bold';

interface TextProps {
  children: any;
  size: SizeType;
  weight: WeightType;
  color: string;
}

export function Text({ children, size, weight, color }: TextProps) {
  return (
    <S.TextComponent size={size} weight={weight} color={color}>
      {children}
    </S.TextComponent>
  );
}
