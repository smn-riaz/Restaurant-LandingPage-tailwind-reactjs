import React from 'react'
import blog1 from '../Assets/blog_1.png'
import blog2 from '../Assets/blog_2.png'
import blog3 from '../Assets/blog_3.png'
import ReadMoreBtn from '../Components/ReadMoreBtn'

const Blog = () => {
  return (
    <main className="min-h-screen p-10" id="blog">
      <section className="p-7 space-y-2">
        <h4 className="text-xl px-5 text-gray-400">Recent News</h4>
        <h1 className="text-5xl">Latest From Blog</h1>
      </section>
      <section className="p-7">
        <div className="sm:grid sm:grid-cols-3">
          <div className="space-y-3 m-5 rounded-3xl transition duration-150 ease-in-out border-gray-100 border-2 hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={blog1} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3">
              <div className='grid grid-cols-2'>
                <div>
                    <p>Sep 20, 2022</p>
                </div>
                <div>
                    <p><span className='text-orange-500'># </span> Bread Food </p>
                </div>
              </div>
              <div>
                <p className='text-xl font-semibold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, officia!
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
            </div>
          </div>

          <div className="space-y-3 m-5 rounded-3xl border-gray-100 border-2 transition duration-150 ease-in-out hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={blog2} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3">
            <div className='grid grid-cols-2'>
                <div>
                    <p>Sep 20, 2022</p>
                </div>
                <div>
                    <p><span className='text-orange-500'># </span> Burger Taste </p>
                </div>
              </div>
              <div>
                <p className='text-xl font-semibold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, officia!
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
            </div>
          </div>

          <div className="space-y-3 m-5 rounded-3xl border-gray-100 transition duration-150 ease-in-out border-2 hover:shadow-lg hover:shadow-orange-600/20">
            <div>
              <img src={blog3} alt="" className="w-full" />
            </div>
            <div className="p-5 space-y-3">
            <div className='grid grid-cols-2'>
                <div>
                    <p>Sep 20, 2022</p>
                </div>
                <div>
                    <p><span className='text-orange-500'>#</span> Cake Pastry </p>
                </div>
              </div>
              <div>
                <p className='text-xl font-semibold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, officia!
                </p>
              </div>
              <div>
                <ReadMoreBtn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog