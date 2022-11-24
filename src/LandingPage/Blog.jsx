import React from "react";

import ReadMoreBtn from "../Components/ReadMoreBtn";
import SectionHeader from "../Components/SectionHeader";

const Blog = () => {
  const blogs = [
    {
      date: "Sep 20, 2022",
      image: "https://i.ibb.co/MhYfTvh/blog-1.png",
      hash: "Strawberry Bread",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      date: "Sep 22, 2022",
      image: "https://i.ibb.co/hsZS6xM/blog-2.png",
      hash: "Burger Taste",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      date: "Oct 20, 2022",
      image: "https://i.ibb.co/QY05y96/blog-3.png",
      hash: "Cake Pastry",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <main className="px-4 ss:px-6 md:px-16 xl:px-40 py-6 md:py-16" id="popular">
      <SectionHeader text1="Poupular Dishes" text2="Our Exclusive Items" />
      <section className="sm:px-12">
        <div className="grid md:grid-cols-3 grid-cols-1 xs:grid-cols-2">
          {blogs.map((blog) => (
            <div className="m-5 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-xl">
              <div className="overflow-hidden w-full">
                <img
                  src={blog.image}
                  alt=""
                  className="w-full hover:scale-110 duration-500"
                />
              </div>
              <div className="p-5 space-y-5">
              <div className='grid grid-cols-2'>
                <div>
                    <p className="text-md font-medium xl:text-xl">{blog.date}</p>
                </div>
                <div>
                    <p className="text-md font-medium xl:text-xl"><span className='text-orange-500'># </span> {blog.hash} </p>
                </div>
              </div>
              <div>
                <p className='text-lg xl:text-xl'>
                {blog.details}
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
              
            </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
