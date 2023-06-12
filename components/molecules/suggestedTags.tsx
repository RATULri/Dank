import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FeatureTitle from "../atoms/featureTitle";
import TagChips, { ChipMode } from "../atoms/chips";

type SuggestedTagsProps = {
  suggestedTags: string[];
  setSuggestedTags: React.Dispatch<React.SetStateAction<string[]>>;
  handleTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const SuggestedTags: React.FC<SuggestedTagsProps> = (
  props: SuggestedTagsProps
) => {
  return (
    <View style={styles.container}>
      <FeatureTitle title="Add suggested tags" />
      <TagChips
        chipNames={props.suggestedTags}
        mode={ChipMode.outlined}
        onPressHandler={props.handleTags}
        onCloseHandler={props.setSuggestedTags}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    minHeight: 200,
  },
});

export default SuggestedTags;
