import React from "react";

const SingleBlog = ({ blog }) => {
  return (
    <div className="border p-4 rounded-2xl ">
      <h3 className="md:text-3xl text-2xl font-black text-center">
        {blog.title}
      </h3>
      <p>{blog.date}</p>
      <img className="h-96 w-full bg-cover" src={blog.image} alt="" />
      <p className="font-black">{blog.category}</p>
      <p className="font-bold">reading time {blog.read_time}</p>
      <p className="text-base-200">{blog.description}</p>
    </div>
  );
};

export default SingleBlog;
