import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { AuthContext } from "./src/hooks/auth";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider
        value={{
          name: "Carlos",
          email: "carlos@email.com",
          avatar: "carlos.png",
        }}
      >
        <Routes />
      </AuthContext.Provider>
    </Background>
  );
}
