import React, { useState } from "react";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { View, Text } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  return (
    <Background>
      <Header title="Agendar partida" />
      <Text style={styles.label}>Categoria</Text>
      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelect={category}
      />

      <View style={styles.form}>

        
      </View>
    </Background>
  );
}
