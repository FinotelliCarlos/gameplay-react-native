import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";

export function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect
          categorySelect={category}
          setCategory={handleCategorySelected}
        />
      </View>
    </View>
  );
}
