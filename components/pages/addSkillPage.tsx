import React from "react";
import { StyleSheet, View } from "react-native";
import PageHeader from "../atoms/pageHeader";
import SearchSkills from "../molecules/searchSkills";
import SuggestedTags from "../molecules/suggestedTags";
import { Button } from "react-native-paper";

const PageAddSkill: React.FC = () => {
  return (
    <View>
      <View style={styles.container1}>
        <PageHeader title="Add Skill" />
        <SearchSkills />
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
