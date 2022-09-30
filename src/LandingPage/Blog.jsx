import React from 'react'
import blog1 from '../Assets/blog_1.png'
import blog2 from '../Assets/blog_2.png'
import blog3 from '../Assets/blog_3.png'
import ReadMoreBtn from '../Components/ReadMoreBtn'
import SectionHeader from '../Components/SectionHeader'

const Blog = () => {
  const blogs = [
    {
      date:"Sep 20, 2022",
      image:blog1,
      hash:"Bread Food ",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      date:"Sep 22, 2022",
      image:blog2,
      hash:"Burger Taste",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      date:"Oct 20, 2022",
      image:blog3,
      hash:"Cake Pastry",
      details:"Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
  ]
  return (
    <main className="min-h-screen sm:p-10 p-5" id="blog">
      <SectionHeader text1="Recent News" text2="Latest From Blog"/>
      <section className="sm:p-7">
        <div className="sm:grid sm:grid-cols-3">

          {
            blogs.map(blog =>  <div className="space-y-3 m-5 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-lg hover:shadow-orange-600/20">
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