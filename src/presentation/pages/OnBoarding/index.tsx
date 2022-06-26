import React from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../../components/Text';
import * as S from './styles';
import Carousel from 'react-native-snap-carousel';
import { ActionBox } from './ActionBox';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { RowProps } from './Row';

export function OnBoarding() {
  const theme = useTheme();
  const actionBoxAcessAppRows: RowProps[] = [
    {
      icon: 'location',
      label: 'Picos cadastrados',
      value: '109 picos.',
      iconColor: 'red',
    },
    {
      icon: 'users',
      label: 'Pessoas cadastradas',
      value: '109 pessoas.',
      iconColor: 'yellow',
    },
    {
      icon: 'online',
      label: 'Pessoas online',
      value: '109 online.',
      iconColor: 'green',
    },
  ];

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
      <S.CourselContainer>
        <Carousel
          data={[{ name: 'Acesse o app' }, { name: 'Faça parte' }]}
          sliderWidth={widthPercentageToDP('100%')}
          itemWidth={widthPercentageToDP('100%')}
          layout="stack"
          renderItem={({ item }) => (
            <ActionBox title={item.name} rows={actionBoxAcessAppRows} />
          )}
        />
      </S.CourselContainer>
    </S.Container>
  );
}
