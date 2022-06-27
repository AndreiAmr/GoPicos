import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes as AppRoutesProps } from '../../typings/routes/app_routes';
import { OnBoarding } from '../../presentation/pages/OnBoarding';

const { Screen, Navigator } = createStackNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="onBoarding" component={OnBoarding} />
    </Navigator>
  );
}
