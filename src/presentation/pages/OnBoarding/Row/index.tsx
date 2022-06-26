import React from 'react';
import * as S from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text } from '../../../components/Text';
import { useTheme } from 'styled-components/native';
import { IconType } from 'react-icons/lib';
import { RFValue } from 'react-native-responsive-fontsize';

type IconNames = 'location' | 'users' | 'online';
type IconColors = 'red' | 'green' | 'yellow';

export interface RowProps {
  icon: IconNames;
  label: string;
  value: string;
  iconColor: IconColors;
}

export function Row({ icon, label, iconColor, value }: RowProps) {
  const theme = useTheme();
  const icons = {
    location: 'location-arrow',
    users: 'users',
    online: 'mobile-phone',
  };

  const iconsColors = {
    red: theme.iconRed,
    green: theme.iconGreen,
    yellow: theme.primary,
  };

  return (
    <S.Container>
      <S.IconContainer>
        <FontAwesome
          name={icons[icon]}
          size={RFValue(25)}
          color={iconsColors[iconColor]}
          style={{
            marginRight: RFValue(9),
          }}
        />
        <Text size={'sm'} weight="normal" color={theme.text}>
          {label}
        </Text>
      </S.IconContainer>
      <Text size={'sm'} weight="medium" color={theme.text}>
        {value}
      </Text>
    </S.Container>
  );
}
