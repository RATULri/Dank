import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HeaderTitleProps = {
  title: string;
};

const HeaderTitle: React.FC<HeaderTitleProps> = (props: HeaderTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 60,
    paddingTop: 20,
    paddingBottom: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default HeaderTitle;
