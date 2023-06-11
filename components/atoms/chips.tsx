import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";

const TagChips: React.FC = () => {
  return (
    <View style={style.container}>
      <Chip onPress={() => {}} mode="outlined" onClose={() => {}}>
        Example Chip
      </Chip>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
});

export default TagChips;
