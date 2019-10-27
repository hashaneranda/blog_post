import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ initialState, onSubmit }) => {
  const [input, setInput] = useState(initialState);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.label}>Blog Title: </Text>
        <TextInput
          style={styles.inputFeild}
          value={input.title}
          onChangeText={text => setInput({ ...input, title: text })}
        />
        <Text style={styles.label}>Blog Content: </Text>
        <TextInput
          style={[styles.inputFeild, styles.inputTextArea]}
          value={input.content}
          onChangeText={text => setInput({ ...input, content: text })}
        />
        <Button
          title="Add post"
          onPress={() => onSubmit(input.title, input.content)}
        />
      </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialState: {
    title: "",
    content: ""
  }
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
  label: {
    fontSize: 25,
    marginVertical: 10
  },
  inputFeild: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    paddingVertical: 3,
    fontSize: 22,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  inputTextArea: {
    height: 100
  }
});

export default BlogPostForm;
