import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blog => `${blog.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("show", { id: item.id })}
            >
              <View style={styles.card}>
                <Text style={styles.blogTitle}>
                  {item.title + " " + item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.blogIcon} name="trash-2" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("create")}>
        <Feather name="plus" size={30} style={{ marginRight: 5 }} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 15,
    marginVertical: 12,
    padding: 10,
    paddingVertical: 15,
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
  blogTitle: {
    fontSize: 20
  },
  blogIcon: {
    fontSize: 25,
    color: "red"
  }
});

export default IndexScreen;
