import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <BlogPostForm
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate("index"));
        }}
      />
    </View>
  );
};

CreateScreen.navigationOptions = () => {
  return {
    title: "Add a post"
  };
};

const styles = StyleSheet.create({});

export default CreateScreen;
