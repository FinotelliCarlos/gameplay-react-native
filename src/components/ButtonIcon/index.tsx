import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import DiscordImg from "../../assets/discord.png";

type ButtonIconProps = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImg} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
