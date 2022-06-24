import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  AppThemeContext,
  AppThemeContextProvider,
} from './src/core/theme/context/theme.context';
import { theme } from './src/core/theme/theme';
import { OnBoarding } from './src/presentation/pages/OnBoarding';

const StyledComponentsTheme = () => {
  const { colorScheme } = useContext(AppThemeContext);

  return (
    <ThemeProvider theme={theme[colorScheme]}>
      <OnBoarding />
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <AppThemeContextProvider>
      <StyledComponentsTheme />
    </AppThemeContextProvider>
  );
};
export default App;
