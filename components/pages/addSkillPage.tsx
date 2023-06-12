import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PageHeader from "../atoms/pageHeader";
import SearchSkills from "../molecules/searchSkills";
import SuggestedTags from "../molecules/suggestedTags";
import { Button, Text } from "react-native-paper";
import AddedSkills from "../molecules/addedSkills";

const PageAddSkill: React.FC = () => {
  const [addedSkills, setAddedSkills] = useState<string[]>([]);

  return (
    <View>
      <View style={styles.container1}>
        <PageHeader title="Add Skill" />
        <SearchSkills
          addedSkills={addedSkills}
          handleAddedSkills={setAddedSkills}
        />
      </View>

      <View style={styles.container2}>
        {addedSkills.length > 0 ? (
          <AddedSkills skillList={addedSkills} />
        ) : null}
        <SuggestedTags />
        <Button
          mode="contained"
          onPress={() => {}}
          disabled={addedSkills.length > 0 ? false : true}
        >
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
