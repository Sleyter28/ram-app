import { Image, StyleSheet, Platform, FlatList, StatusBar } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CharacterItem } from "@/components/CharacterItem";
import { useEffect, useState } from "react";
import { CharacterItemProps } from "@/types";
import { getCharacters } from "@/utils/character";

const DATA = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    created: "2017-11-04T18:48:46.250Z"
},
{
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type:"",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    created: "2017-11-04T18:50:21.651Z"
},
{
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    created: "2017-11-04T19:09:56.428Z"
},
{
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    created: "2017-11-04T19:22:43.665Z"
},
];

export default function HomeScreen() {
  const [characters, setCharacters] = useState<CharacterItemProps[]>([]);

  useEffect(() => {
    const getCharactersData = async() => {
      try {
        const resp = await getCharacters();
        if (resp) {
          setCharacters(resp.results);
          console.log("Characters: ", characters);
        }
      } catch (error) {
        console.error("Error fetching characters: ", error);
      }
    }
    getCharactersData();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Characters</ThemedText>
          <HelloWave isCharacter={true} />
        </ThemedView>
        <FlatList
          data={characters}
          renderItem={({ item }) => <CharacterItem {...item}  />}
          keyExtractor={(item) => `${item.id}`}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 400,
    bottom: 0,
    left: 10,
    position: "absolute",
  },
});
