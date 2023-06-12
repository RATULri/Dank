import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FeatureTitle from "../atoms/featureTitle";
import TagChips, { ChipMode } from "../atoms/chips";

const suggestedTagList = [
  "Tag 1",
  "Tag 2",
  "Tag 3",
  "Tag 4",
  "Tag 5",
  "Tag 6",
  "Tag 7",
  "Tag 8",
  "Tag 9",
];

type SuggestedTagsProps = {
  handleTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const SuggestedTags: React.FC<SuggestedTagsProps> = (
  props: SuggestedTagsProps
) => {
  const [suggestedTags, setSuggestedTags] = useState(suggestedTagList);

  return (
    <View style={styles.container}>
      <FeatureTitle title="Add suggested tags" />
      <TagChips
        chipNames={suggestedTags}
        mode={ChipMode.outlined}
        onPressHandler={props.handleTags}
        onCloseHandler={setSuggestedTags}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // flex: 1,
    height: 300,
  },
});

export default SuggestedTags;
