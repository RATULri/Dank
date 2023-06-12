import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Searchbar } from "react-native-paper";

type SearchSkillsProps = {
  addedSkills: string[];
  handleAddedSkills: React.Dispatch<React.SetStateAction<string[]>>;
};

const SearchSkills: React.FC<SearchSkillsProps> = (
  props: SearchSkillsProps
) => {
  const [searchedSkill, setSearchedSkill] = useState<string>("");

  return (
    <View>
      <View style={styles.container}>
        <Searchbar
          placeholder="Start typing to search"
          onChangeText={(e) => setSearchedSkill(e)}
          value={searchedSkill}
          mode="view"
        />
      </View>

      {searchedSkill && (
        <View style={styles.searchedSkillContainer}>
          <Text style={styles.searchedSkillText}>{searchedSkill}</Text>
          <Button
            mode="outlined"
            onPress={() => {
              props.handleAddedSkills([...props.addedSkills, searchedSkill]);
              setSearchedSkill("");
            }}
            disabled={props.addedSkills.includes(searchedSkill) ? true : false}
          >
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
