
import React, { useState } from 'react'
import BlueCircle from './BlurCircle'
import { ChevronRightIcon, ChevronsLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(null)

  // ✅ define today at midnight
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const onBookHandler = () => {
    if (!selectedDate) {
      return toast('Please Select a Date')
    }
    scrollTo(0, 0)
    navigate(`/movies/${id}/${selectedDate}`)
  }

  // ✅ filter only today and future dates
  const futureDates = Object.keys(dateTime).filter((date) => {
    const currentDate = new Date(date)
    currentDate.setHours(0, 0, 0, 0)
    return currentDate >= today
  })

  return (
    <div id='dateSelect' className='pt-30'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
        <BlueCircle top="-100px" left='-100px'/>
        <BlueCircle top="100px" right='0px'/>

        <p className='text-lg font-semibold'>Choose Date</p>

        <div className='flex items-center gap-6 text-sm mt-5'>
          <ChevronsLeftIcon width={28}/>
          <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
            {futureDates.map((date) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
                  selectedDate === date
                    ? "bg-primary text-white"
                    : "border border-primary/70"
                }`}
              >
                <span>{new Date(date).getDate()}</span>
                <span>{new Date(date).toLocaleDateString("en-US", { month: "short" })}</span>
              </button>
            ))}
          </span>
          <ChevronRightIcon width={28}/>
        </div>

        <button
          onClick={onBookHandler}
          className='bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer'
        >
          {selectedDate
            ? `Continue with ${new Date(selectedDate).toLocaleDateString("en-US")}`
            : "Select Date"}
        </button>
      </div>
    </div>
  )
}

export default DateSelect
