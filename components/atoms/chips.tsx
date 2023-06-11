import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip } from "react-native-paper";

const TagChips: React.FC = () => {
  return (
    <View style={style.container}>
      {/* <Chip icon="information" onPress={() => console.log("Pressed")}>
        Example Chip{" "}
      </Chip> */}
      <Text>asdfasdf</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },
});

export default TagChips;
