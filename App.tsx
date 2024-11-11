import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import react, { useState, useEffect, useCallback } from "react";
import { Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/home';
import Splash from './src/screens/splash';
import Servers from './src/screens/servers';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Servers: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}/>
      <RootStack.Screen
        name="Splash"
        component={Splash}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}/>
      <RootStack.Screen
        name="Servers"
        component={Servers}
        options={{
          animation: Platform.OS === "ios" ? "fade" : "simple_push",
          headerShown: false,
        }}/>
      </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


