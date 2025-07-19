import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.header_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to <b>TechnoFinder</b>, your go-to destination for finding skilled and verified technicians — whether it's for your home, computer, or vehicle. In a world where time is everything, we make fixing things faster, simpler, and smarter.</p>
          <p>At TechnoFinder, we bridge the gap between everyday problems and instant solutions. No more scrolling through endless listings or calling unverified contacts. Whether you need a laptop fixed, your AC serviced, or a mechanic on-the-go, we’ve got the right expert ready for you.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To create a seamless platform that empowers users to book reliable local technicians with confidence and ease — all at their fingertips.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>TRUSTED PROFESSIONALS</b>
          <p>All technicians are verified, skilled, and rated by real users in your community.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>INSTANT BOOKING</b>
          <p>Book a technician in just a few taps—anytime, anywhere. No more waiting or guesswork.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>TECH THAT CARES</b>
          <p >Our smart matching algorithm connects you with the best technician for your exact needs—fast and fair.</p>
        </div>
      </div>

    </div>
  )
}

export default About
