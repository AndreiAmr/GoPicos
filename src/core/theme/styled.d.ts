import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  export type CustomThemeProps = {
    blue: string;
    shape: string;
    statusBarLightContent: string;
    statusBarDarkContent: string;
  };

  export interface DefaultTheme extends CustomThemeProps {}
}
