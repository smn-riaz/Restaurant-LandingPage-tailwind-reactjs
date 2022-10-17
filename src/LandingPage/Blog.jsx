import React from 'react'

import ReadMoreBtn from '../Components/ReadMoreBtn'
import SectionHeader from '../Components/SectionHeader'

const Blog = () => {
  const blogs = [
    {
      date:"Sep 20, 2022",
      image:"https://i.ibb.co/MhYfTvh/blog-1.png",
      hash:"Bread Food ",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      date:"Sep 22, 2022",
      image:"https://i.ibb.co/hsZS6xM/blog-2.png",
      hash:"Burger Taste",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      date:"Oct 20, 2022",
      image:"https://i.ibb.co/QY05y96/blog-3.png",
      hash:"Cake Pastry",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
  ]
  return (
    <main className="min-h-screen sm:p-10 p-5" id="blog">
      <SectionHeader text1="Recent News" text2="Latest From Blog"/>
      <section className="sm:p-7">
        <div className="sm:flex md:flex sm:flex-row m-auto justify-between items-center">

          {
            blogs.map(blog =>  <div className="space-y-3 m-5 sm:basis-1/2 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={blog.image} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3">
              <div className='grid grid-cols-2'>
                <div>
                    <p>{blog.date}</p>
                </div>
                <div>
                    <p><span className='text-orange-500'># </span> {blog.hash} </p>
                </div>
              </div>
              <div>
                <p className='text-xl font-semibold'>
                {blog.details}
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
              
            </div>
          </div>
          )
          }

         


        </div>
      </section>
    </main>
  )
}

export default Blog