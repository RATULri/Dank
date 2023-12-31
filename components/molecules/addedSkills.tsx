import React from "react";
import { StyleSheet, View } from "react-native";
import TagChips, { ChipMode } from "../atoms/chips";

type AddedSkillsProps = {
  skillList: string[];
  handleSkillList: React.Dispatch<React.SetStateAction<string[]>>;
};

const AddedSkills: React.FC<AddedSkillsProps> = (props: AddedSkillsProps) => {
  return (
    <View style={styles.container}>
      <TagChips
        chipNames={props.skillList}
        onCloseHandler={props.handleSkillList}
        mode={ChipMode.flat}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "row",
    minHeight: 100,
    paddingTop: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default AddedSkills;
