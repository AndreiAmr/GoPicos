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
  },
  dark: {
    shape: '#FFFFFF',
    blue: 'darkblue',
    statusBarLightContent: '#000000',
    statusBarDarkContent: '#0087B195',
  },
};
