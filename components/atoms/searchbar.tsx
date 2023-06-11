import React from "react";
import { StyleSheet, View, Text } from "react-native";
// import { Searchbar } from "react-native-paper";

const SearchTags: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Searchbar placeholder="Search" onChangeText={() => {}} value="asd" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    height: 60,
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default SearchTags;
