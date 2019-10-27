import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "add_blog_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: payload.title,
          content: payload.content
        }
      ];
    case "delete_blog_post":
      return state.filter(data => data.id !== payload);
    case "edit_blog_post":
      return state.map(data => (data.id === payload.id ? payload : data));
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: "add_blog_post", payload: { title, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "delete_blog_post", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blog_post", payload: { id, title, content } });
    if (callback) callback();
  };
};

const initialState = {
  id: "1231456",
  title: "Blog post 1",
  content: "fgawdguiawgdaui vuagwduiawhuidhba uiagduigawuidhaw uigawduigiaw"
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [initialState]
);
