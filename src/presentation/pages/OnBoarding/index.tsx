import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../../components/Text';
import * as S from './styles';

export function OnBoarding() {
  const theme = useTheme();

  return (
    <S.Container>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.statusBarDarkContent}
      />
      <S.ImageBg />
      <S.LogoContainer>
        <S.LogoImage />
        <Text size="lg" weight="bold" color={theme.shape}>
          Go Picos
        </Text>
      </S.LogoContainer>
    </S.Container>
  );
}
