import React from "react";
import { StyleSheet, View, Text } from "react-native";

type FeatureTitleProps = {
  title: string;
};

const FeatureTitle: React.FC<FeatureTitleProps> = (
  props: FeatureTitleProps
) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    // flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

export default FeatureTitle;
