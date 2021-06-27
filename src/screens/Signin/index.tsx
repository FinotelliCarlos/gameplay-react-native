import React from "react";
import { Image, Text, View } from "react-native";
import illustration from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";

export function Signin() {
  const { user, sighIn } = useAuth();

  function handleSignIn() {}

  return (
    <Background>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={illustration}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize {"\n"}suas jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
