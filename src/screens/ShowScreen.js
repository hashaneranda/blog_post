import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);

  const blog = state.find(blog => blog.id === navigation.getParam("id"));

  useEffect(() => {
    if (blog) navigation.setParams({ blog: blog.title });
  }, [blog]);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.content}>{blog.content}</Text>
      </View>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("edit", { id: navigation.getParam("id") })
        }
      >
        <Feather name="edit" size={26} style={{ marginRight: 5 }} />
      </TouchableOpacity>
    ),
    title: navigation.getParam("blog")
  };
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginHorizontal: 15,
    padding: 10,
    marginTop: 20,
    paddingVertical: 25,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  },
  title: {
    fontSize: 35,
    marginVertical: 15,
    textAlign: "center"
  },
  content: {
    fontSize: 20,
    marginVertical: 10
  }
});

export default ShowScreen;
