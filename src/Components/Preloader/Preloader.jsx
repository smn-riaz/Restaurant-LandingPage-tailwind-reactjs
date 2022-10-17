import React from 'react'
import './Preloader.css'
import burger from '../../Assets/burger.gif'

const Preloader = () => {
  return (
    <main id='loading-screen' className='bg-gradient-to-r from-[#e94a118f] to-[#df6e46] flex justify-center items-center'>
        <img src={burger} className="h-28 w-28" alt="" />
    </main>
  )
}

export default Preloader