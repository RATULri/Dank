import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Searchbar } from "react-native-paper";

const SearchSkills: React.FC = () => {
  const [searchedSkill, setSearchedSkill] = useState<string>();

  return (
    <View>
      <View style={styles.container}>
        <Searchbar
          placeholder="Start typing to search"
          onChangeText={(e) => setSearchedSkill(e)}
          value={searchedSkill ?? ""}
          mode="view"
        />
      </View>
      {searchedSkill && (
        <View style={styles.searchedSkillContainer}>
          <Text style={styles.searchedSkillText}>{searchedSkill}</Text>
          <Button mode="outlined" onPress={() => {}}>
            Add
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchedSkillText: {
    alignSelf: "center",
  },
  searchedSkillContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default SearchSkills;
