import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";

export enum ChipMode {
  "flat",
  "outlined",
}

type TagChipProps = {
  chipNames: string[];
  onPressHandler?: React.Dispatch<React.SetStateAction<string[]>>;
  onCloseHandler: React.Dispatch<React.SetStateAction<string[]>>;
  mode: ChipMode;
};

const TagChips: React.FC<TagChipProps> = (props: TagChipProps) => {
  const handleClose = (name: string) =>
    props.onCloseHandler(props.chipNames.filter((c) => c !== name));

  return (
    <View style={style.container}>
      {props.chipNames.map((name, index) => (
        <Chip
          onPress={() => {
            props.onPressHandler?.((added) => [...added, name]);
            handleClose(name);
          }}
          mode={props.mode === ChipMode.flat ? "flat" : "outlined"}
          onClose={() => handleClose(name)}
          key={index}
        >
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
