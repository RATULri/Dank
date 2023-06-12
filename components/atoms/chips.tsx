import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";

type TagChipProps = {
  chipName: string[];
};

const TagChips: React.FC<TagChipProps> = (props: TagChipProps) => {
  return (
    <View style={style.container}>
      {props.chipName.map((name, index) => (
        <Chip onPress={() => {}} mode="outlined" onClose={() => {}} key={index}>
          {name}
        </Chip>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "flex-start",
    marginBottom: 10,
  },
});

export default TagChips;
