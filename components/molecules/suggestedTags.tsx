import React from "react";
import { StyleSheet, View } from "react-native";
import FeatureTitle from "../atoms/featureTitle";
import TagChips from "../atoms/chips";

const SuggestedTags: React.FC = () => {
  return (
    <View style={styles.container}>
      <FeatureTitle title="Add suggested tags" />
      <TagChips />
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
