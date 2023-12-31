import { StyleSheet, View, SafeAreaView } from "react-native";
import PageAddSkill from "./components/pages/addSkillPage";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PageAddSkill />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
});
