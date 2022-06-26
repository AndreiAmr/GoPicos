import { CustomThemeProps } from 'styled-components';

interface ThemeProps {
  light: CustomThemeProps;
  dark: CustomThemeProps;
}

export const theme: ThemeProps = {
  light: {
    shape: '#fff',
    blue: 'pink',
    statusBarLightContent: '#fff',
    statusBarDarkContent: '#0087B195',
    primary: '#036BCC',
    text: '#000',
    iconRed: '#CF462A',
    iconGreen: '#0ED916',
    borderBottom: '#00000018',
    buttonPrimary: '#6096FF',
  },
  dark: {
    shape: '#000',
    blue: 'darkblue',
    statusBarLightContent: '#000000',
    statusBarDarkContent: '#0087B195',
    primary: '#036BCC',
    text: '#fff',
    iconRed: '#CF462A',
    iconGreen: '#0ED916',
    borderBottom: '#FFFFFF50',
    buttonPrimary: '#6096FF',
  },
};
