import React from 'react'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col items-start justify-center gap-6 px-6 md:px-16 lg:px-36 
      bg-[url('/backgroundImage.png')] bg-cover bg-center h-screen text-white relative "
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-[70px] md:leading-[1.2] font-semibold max-w-2xl mt-4">
          Brad Pitt – F1
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-6 text-lg text-gray-200 mt-4">
          <span>Action | Drama | Sport</span>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" /> 2025
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5" /> 2h 35m
          </div>
        </div>

        {/* Description */}
        <p className="max-w-xl text-gray-300 text-lg leading-relaxed">
          Brad Pitt stars in an adrenaline-fueled racing drama that takes audiences inside the
          high-speed world of Formula 1. Filmed with groundbreaking in-car cameras and IMAX
          technology, the movie delivers an authentic, edge-of-your-seat experience as a veteran
          driver mentors the next generation while battling for glory on the track.
        </p>

        {/* Button */}
        {/* <button
          onClick={() => navigate('/movies')}
          className="flex items-center gap-2 px-4 py-2 text-sm md:text-base  bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer w-fit mt-6"
        >
          Explore Movies
          <ArrowRight className="w-5 h-5" />
        </button> */}
      </div>
    </div>
  )
}

export default HeroSection