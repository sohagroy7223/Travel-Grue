import React from "react";
import { useLoaderData } from "react-router";
import SingleBlog from "./SingleBlog";

const Blog = () => {
  const data = useLoaderData();

  return (
    <div className="grid gap-3">
      {data.map((blog) => (
        <SingleBlog key={blog.id} blog={blog}></SingleBlog>
      ))}
    </div>
  );
};

export default Blog;
