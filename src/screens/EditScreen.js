import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext);

  const id = navigation.getParam("id");

  const blog = state.find(blog => blog.id === id);

  useEffect(() => {
    if (blog) navigation.setParams({ blog: blog.title });
  }, [blog]);

  const initialState = {
    title: blog ? blog.title : "",
    content: blog ? blog.content : ""
  };

  return (
    <View>
      <BlogPostForm
        initialState={initialState}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

EditScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("blog")
  };
};

const styles = StyleSheet.create({});

export default EditScreen;
