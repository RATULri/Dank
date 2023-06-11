import React from "react";
import { StyleSheet, View } from "react-native";
import TagChips from "../atoms/chips";

type AddedSkillsProps = {
  skillList: string[];
};

const AddedSkills: React.FC<AddedSkillsProps> = (props: AddedSkillsProps) => {
  return (
    <View style={styles.container}>
      <TagChips chipName={props.skillList[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 20,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default AddedSkills;
