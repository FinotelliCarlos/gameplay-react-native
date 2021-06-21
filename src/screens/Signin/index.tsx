import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function Signin() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Image style={styles.image} source={illustration} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}suas jogatinas {`\n`}facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" />
      </View>
    </View>
  );
}
