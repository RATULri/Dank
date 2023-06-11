import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import PageHeader from "./components/atoms/header";
import SuggestedTags from "./components/molecules/suggestedTags";
import SearchTags from "./components/molecules/searchTags";
import PageAddSkill from "./components/pages/addSkillPage";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <PageAddSkill />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
  },
});
