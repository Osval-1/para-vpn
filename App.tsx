import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import react, { useState, useEffect, useCallback } from "react";
import { Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/home";
import Splash from "@/screens/splash";
import Servers from "@/screens/servers";
import { RootStackParamList } from "@/types/screens";
import BottomTabs from "@/route/bottom_tabs";

let darkTheme: any;
SplashScreen.preventAutoHideAsync();

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (!fontsLoaded) return;
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const colorScheme = useColorScheme();
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    IcoMoon: require("./assets/fonts/icomoon.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <RootStack.Navigator>
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              animation: Platform.OS === "ios" ? "fade" : "simple_push",
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              animation: Platform.OS === "ios" ? "fade" : "simple_push",
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{
              animation: Platform.OS === "ios" ? "fade" : "simple_push",
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Servers"
            component={Servers}
            options={{
              animation: Platform.OS === "ios" ? "fade" : "simple_push",
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
