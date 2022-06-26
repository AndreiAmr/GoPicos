import React from 'react';
import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import * as S from './styles';

type ButtonSizes = 'lg' | 'md' | 'sm';

interface ButtonProps {
  label: string;
  size?: ButtonSizes;
  color?: string;
}

export function Button({ label, size }: ButtonProps) {
  const theme = useTheme();

  return (
    <S.Container>
      <Text size="md2" weight="medium" color={theme.shape}>
        {label}
      </Text>
    </S.Container>
  );
}
