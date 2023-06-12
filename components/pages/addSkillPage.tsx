import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import PageHeader from "../atoms/pageHeader";
import SearchSkillsFeature from "../organisms/searchSkillsFeature";
import SuggestedTags from "../molecules/suggestedTags";
import { Button, Text } from "react-native-paper";
import AddedSkills from "../molecules/addedSkills";
import { suggestedTagList } from "../../assets/constants/suggestedTags";

const PageAddSkill: React.FC = () => {
  const [addedSkills, setAddedSkills] = useState<string[]>([]);
  const [suggestedTags, setSuggestedTags] = useState(suggestedTagList);

  return (
    <View>
      <View style={styles.searchContainer}>
        <PageHeader title="Add Skill" />
        <SearchSkillsFeature
          addedSkills={addedSkills}
          handleAddedSkills={setAddedSkills}
        />
      </View>

      <View style={styles.tagsContainer}>
        <View style={{ minHeight: 0 }}>
          {addedSkills.length > 0 ? (
            <AddedSkills
              skillList={addedSkills}
              handleSkillList={setAddedSkills}
            />
          ) : null}
        </View>

        <View style={{ height: 200 }}>
          <SuggestedTags
            suggestedTags={suggestedTags}
            setSuggestedTags={setSuggestedTags}
            handleTags={setAddedSkills}
          />
        </View>

        <Button
          mode="contained"
          // buttonColor="blue"
          onPress={() => {
            setAddedSkills([]);
            setSuggestedTags(suggestedTagList);
          }}
          disabled={addedSkills.length > 0 ? false : true}
        >
          Save
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#fff",
  },
  tagsContainer: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
});

export default PageAddSkill;
