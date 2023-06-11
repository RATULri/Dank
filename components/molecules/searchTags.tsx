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
    height: 100,
    paddingLeft: 15,
    paddingRight: 1,
  },
});

export default SearchTags;
