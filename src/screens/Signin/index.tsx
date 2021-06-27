import React from "react";
import { Alert, Image, Text, View, ActivityIndicator } from "react-native";
import illustration from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";

export function SignIn() {
  const { loading, sighIn } = useAuth();

  async function handleSignIn() {
    try {
      await sighIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

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
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
