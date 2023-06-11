import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PageHeader from "../atoms/pageHeader";
import SearchTags from "../molecules/searchTags";
import SuggestedTags from "../molecules/suggestedTags";
import { Button } from "react-native-paper";

const PageAddSkill: React.FC = () => {
  const [searchedTag, setSearchedTag] = useState<string>("example");

  return (
    <View>
      <View style={styles.container1}>
        <PageHeader title="Add Skill" />
        <SearchTags />
      </View>

      <View style={styles.container2}>
        <SuggestedTags />
        <Button mode="contained" onPress={() => {}} disabled={true}>
          Save
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#fff",
  },
  container2: {
    backgroundColor: "#fff",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default PageAddSkill;
