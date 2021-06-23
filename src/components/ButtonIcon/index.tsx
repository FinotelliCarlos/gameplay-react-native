import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} activeOpacity={0.7} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImg} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
