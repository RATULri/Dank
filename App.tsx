import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HeaderTitle from "./components/atoms/header";
import SearchTags from "./components/atoms/searchbar";
import FeatureTitle from "./components/atoms/featureTitle";
import TagChips from "./components/atoms/chips";
import SuggestedTags from "./components/molecules/suggestedTags";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HeaderTitle title="Add Skill" />
        <SearchTags />
        <SuggestedTags />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // view: { flexDirection: "row" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
