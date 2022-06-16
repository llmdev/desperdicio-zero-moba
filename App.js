import React from "react";
import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import DrawerNavigation from "./src/components/navigation/DrawerNavigation";
import theme from './src/theme';
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
      <ThemeProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
      <StatusBar backgroundColor="white"/>
      </ThemeProvider>
  );
}
