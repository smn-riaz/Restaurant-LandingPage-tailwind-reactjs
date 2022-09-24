import React from 'react'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <main className='min-h-screen'>
        {/* <section className="p-7 space-y-2">
        <h4 className="text-xl px-5 text-gray-500">Testimonial</h4>
        <h1 className="text-5xl ">Customer Feedback</h1>
      </section>
      <section>
        <div>
            <div className='flex flex-row p-8'>
                <div className='basis-1/5'>
                    <img src="https://i.ibb.co/VqhFD6Q/small.png" alt="" className='rounded-full w-2/3 p-8'/>
                </div>
                <div className='basis-3/5 space-y-6'>
                    <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel eligendi quod ducimus natus voluptatibus porro similique, autem voluptatem distinctio.</p>
                    <h3 className='text-3xl'>Morem Laure</h3>
                </div>
            </div>
        </div>
      </section> */}
    </main>
  )
}

export default Testimonial