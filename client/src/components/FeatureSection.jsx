import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlueCircle from './BlurCircle'
import MovieCard from './MovieCard'
import axios from 'axios'

const FeatureSection = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/show/all")
    console.log("API Response:", res.data)

    // If backend sends { shows: [...] }
    setMovies(res.data.shows || [])
  } catch (err) {
    console.error("Error fetching movies:", err)
    setMovies([]) // fallback to empty array
  }
}


    fetchMovies()
  }, [])

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlueCircle top="0" right="-80px" />
        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
        <button
          onClick={() => navigate('/movies')}
          className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'
        >
          View All 
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' />
        </button>
      </div>

      <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
        {movies.slice(0, 4).map((movie) => (
          <MovieCard key={movie._id} movie={movie}/>
        ))}
      </div>

      <div className='flex justify-cente mt-20'>
        <button 
          onClick={() => {navigate('/movies'); scrollTo(0,0)}}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
        >
          Show More
        </button>
      </div>
    </div>
  )
}

export default FeatureSection
