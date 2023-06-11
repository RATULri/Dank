import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchTags: React.FC = () => {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={() => {}}
        value="asd"
        mode="view"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default SearchTags;
