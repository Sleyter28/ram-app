import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { CharacterItemProps } from "@/types";
import { Image } from 'expo-image';


export function CharacterItem({ name, image}: CharacterItemProps) {
  return (
    <View style={styles.container}>
        <Image source={image} style={{width: 20, height: 20}} />
      <ThemedText>{name}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#42ddf5",
  },
});
