import React from "react";
import { View } from "react-native";
import PageHeader from "../atoms/header";
import SearchTags from "../molecules/searchTags";
import SuggestedTags from "../molecules/suggestedTags";

const PageAddSkill: React.FC = () => {
  return (
    <View>
      <PageHeader title="Add Skill" />
      <SearchTags />
      <SuggestedTags />
    </View>
  );
};

export default PageAddSkill;
