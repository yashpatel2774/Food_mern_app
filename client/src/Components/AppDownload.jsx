import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='w-full py-10 bg-white text-black text-center'>
      <p className='text-2xl md:text-5xl font-semibold mb-6'>
        For Better Experience Download <br className='hidden md:block' /> Tomato App
      </p>
      <div className='flex justify-center items-center gap-4'>
        <img
          src={assets.play_store}
          alt="Google Play"
          className='w-36 md:w-44 cursor-pointer transition transform hover:scale-105 hover:shadow-xl'
        />
        <img
          src={assets.app_store}
          alt="App Store"
          className='w-36 md:w-44 cursor-pointer transition transform hover:scale-105 hover:shadow-xl'
        />
      </div>
    </div>
  )
}

export default AppDownload
