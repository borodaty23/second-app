import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import InputValue from "./components/InputValue";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [posts2, setPost2] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  // const bodyInputRef = useRef();

  const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);

    setPost({ title: "", body: "" });
    // console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <InputValue />

      <Counter />

      <PostList posts={posts} title="list posts 1" />
      <PostList posts={posts2} title="list posts 2" />

      <form>
        {/* Управляемые компаненты */}

        <MyInput
          value={post.title}
          onChange={(event) => setPost({ ...post, title: event.target.value })}
          type="text"
          placeholder="posts name"
        />

        <MyInput
          value={post.body}
          onChange={(event) => setPost({ ...post, body: event.target.value })}
          type="text"
          placeholder="posts description"
        />

        {/* Некоетролируемый компанент

        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="posts description"
        /> */}
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  );
}

export default App;
