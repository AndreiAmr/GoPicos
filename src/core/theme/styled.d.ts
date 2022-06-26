import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  export type CustomThemeProps = {
    blue: string;
    shape: string;
    statusBarLightContent: string;
    statusBarDarkContent: string;
    primary: string;
    text: string;
    iconRed: string;
    iconGreen: string;
    borderBottom: string;
    buttonPrimary: string;
  };

  export interface DefaultTheme extends CustomThemeProps {}
}
