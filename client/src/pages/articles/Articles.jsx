import { useEffect, useState } from "react";
import Article from "../article/Article";
import "./articles.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Articles () {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="posts">
      {posts.map((p) => (
        <Article post={p} />
      ))}
    </div>
  );
}