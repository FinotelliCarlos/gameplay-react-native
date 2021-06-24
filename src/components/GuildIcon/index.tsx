import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://w7.pngwing.com/pngs/25/642/png-transparent-counter-strike-global-offensive-counter-strike-source-dota-2-logo-others-emblem-text-orange-thumbnail.png";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
