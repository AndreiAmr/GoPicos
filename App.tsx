import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components/native';
import {
  AppThemeContext,
  AppThemeContextProvider,
} from './src/core/theme/context/theme.context';
import { theme } from './src/core/theme/theme';
import { AppRoutes } from './src/infra/routes/AppRoutes';
import { OnBoarding } from './src/presentation/pages/OnBoarding';

const StyledComponentsTheme = () => {
  const { colorScheme } = useContext(AppThemeContext);

  return (
    <ThemeProvider theme={theme[colorScheme]}>
      <AppRoutes />
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppThemeContextProvider>
        <StyledComponentsTheme />
      </AppThemeContextProvider>
    </NavigationContainer>
  );
};
export default App;
