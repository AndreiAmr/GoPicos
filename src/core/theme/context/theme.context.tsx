import React, { createContext, useEffect, useState } from 'react';
import { Platform, useColorScheme } from 'react-native';
import { theme } from '../theme';

type ColorSchemeType = 'dark' | 'light';

interface DefaultValuesProps {
  colorScheme: ColorSchemeType;
  handleChangeColorScheme: (theme: ColorSchemeType) => void;
}

const defaultValues: DefaultValuesProps = {
  colorScheme: 'light',
  handleChangeColorScheme: () => {},
};

export const AppThemeContext = createContext(defaultValues);

export const AppThemeContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const deviceTheme = useColorScheme();
  const [actualTheme, setActualTheme] = useState<ColorSchemeType>(
    deviceTheme ? deviceTheme : 'light',
  );

  const handleChangeColorScheme = (theme: ColorSchemeType) => {
    setActualTheme(theme);
  };

  useEffect(() => {
    setActualTheme(deviceTheme as ColorSchemeType);
  }, [deviceTheme]);

  return (
    <AppThemeContext.Provider
      value={{
        colorScheme: actualTheme,
        handleChangeColorScheme,
      }}>
      {children}
    </AppThemeContext.Provider>
  );
};
