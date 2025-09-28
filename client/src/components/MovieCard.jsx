import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie, image_base_url = "https://image.tmdb.org/t/p/w500" }) => {
  const navigate = useNavigate()

  // Safe reads and fallbacks to prevent runtime crashes when fields are missing
  const movieId = movie?._id || movie?.id
  const title = movie?.title || "Untitled"
  const year = movie?.release_date ? new Date(movie.release_date).getFullYear() : "N/A"
  const genresArray = Array.isArray(movie?.genres) ? movie.genres : []
  const genres = genresArray
    .slice(0, 2)
    .map(g => (typeof g === 'string' ? g : g?.name))
    .filter(Boolean)
    .join(" | ") || "Unknown Genre"
  const runtimeStr = movie?.runtime ? timeFormat(movie.runtime) : "N/A"
  const rating = typeof movie?.vote_average === 'number' ? movie.vote_average.toFixed(1) : "N/A"

  // If backdrop_path is already a full URL, use it as-is; otherwise prefix
  const backdrop = movie?.backdrop_path || movie?.poster_path || ""
  const isFullUrl = typeof backdrop === 'string' && /^https?:\/\//i.test(backdrop)
  const imageSrc = backdrop ? (isFullUrl ? backdrop : `${image_base_url}${backdrop}`) : 'https://via.placeholder.com/600x400/1f2937/ffffff?text=No+Image'

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>
      <img
        onClick={() => { if (movieId) { navigate(`/movies/${movieId}`); scrollTo(0, 0) } }}
        src={imageSrc}
        alt={title}
        className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'
        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400/1f2937/ffffff?text=No+Image' }}
      />

      <p className='font-semibold mt-2 truncate'>{title}</p>
      <p className='text-sm text-gray-400 mt-2'>
        {year} | {genres} | {runtimeStr}
      </p>

      <div className='flex items-center justify-between mt-4 pb-3'>
        <button
          onClick={() => { if (movieId) { navigate(`/movies/${movieId}`); scrollTo(0, 0) } }}
          className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'
        >
          Buy Tickets
        </button>
        <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
          <StarIcon className='w-4 h-4 text-primary fill-primary'/>{rating}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
