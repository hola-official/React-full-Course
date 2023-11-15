import { Routes, Route } from "react-router-dom";
import { Home, NewPost, PostPage, Missing, About, EditPost } from "./Pages/index";
// import NewPost from "./Pages/NewPost";
// import PostPage from "./Pages/PostPage";
// import Missing from "./Pages/Missing";
// import About from "./Pages/About";
import HomeLayout from "./Layouts/HomeLayout";
// import EditPost from "./Pages/EditPost";
import UseAxiosFetch from "./hooks/UseAxiosFetch";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

const App = () => {

  const { data, fetchError, isLoading } = UseAxiosFetch(
    'http://localhost:3500/posts'
  )

  const setPosts = useStoreActions((actions) => actions.setPosts)

  useEffect(() => {
    setPosts(data)
  }, [data, setPosts])

  return (
    <Routes>
      <Route
        path=""
        element={<HomeLayout />}
      >
        <Route index element={<Home fetchError={fetchError} isLoading={isLoading} />} />
        <Route path="/post">
          <Route
            index
            element={
              <NewPost />
            }
          />
          <Route
            path=":id"
            element={<PostPage />}
          />
        </Route>

        <Route
          path="/edit/:id"
          element={
            <EditPost />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
