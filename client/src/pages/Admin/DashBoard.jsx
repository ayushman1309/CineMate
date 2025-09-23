import { ChartLineIcon, UserIcon, PlayCircleIcon, IndianRupeeIcon, StarIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/Admin/Title';
import BlueCircle from '../../components/BlueCircle';
import { dateFormat } from '../../lib/dateFormat';

const DashBoard = () => {

  const currency = import.meta.env.VITE_CURRENCY;

  const [dashboardData, setDashboardData] = useState({
    totalEarnings: 0,
    totalBookings: 0,
    totalUsers: 0,
    activeShows: [],
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    { title: "Total Bookings", value: dashboardData.totalBookings || "0", icon: ChartLineIcon },
    { title: "Total Revenue", value:  currency + dashboardData.totalRevenue || "0", icon: IndianRupeeIcon },
    { title: "Total Users", value: dashboardData.totalUser || "0", icon: UserIcon },
    { title: "Active Shows", value: dashboardData.activeShows.length || "0", icon: PlayCircleIcon},
  ];
  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData)
    setLoading(false)
  }

  useEffect(() => {
    fetchDashboardData();
  } , [])

  return !loading ? (
    <>
      <Title text1="Admin" text2="Dashboard"/>

      <div className='relative flex flex-wrap gap-4 mt-6`'>
        <BlueCircle top="-100px" left='0'/>
        <div className='flex flex-wrap gap-4 w-full'>
          {dashboardCards.map((card , index) => {
          const Icon = card.icon; // Assign the icon component
          return (
           <div key={index} className='flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md max-w-[250px] w-full'>
            <div>
              <h1 className='text-sm'>{card.title}</h1>
              <p className='text-xl font-medium mt-1'>{card.value}</p>
            </div>
          <Icon className='w-6 h-6 text-primary' />
          </div>
          )
          })}
        </div>
      </div>


      <p className='mt-10 text-lg font-medium'>Active Shows</p>
      <div className='relative flex flex-wrap gap-6 mt-4 max-w-5xl'>
        <BlueCircle top='100px' left='-10%'/>
        {dashboardData.activeShows.map((show) => (
          <div key={show._id} className='w-55 rounded-lg overflow-hidden h-full pb-3 bg-primary/10 border border-primary/20 hover:-translate-y-1 transition duration-300'>
            <img src={show.movie.poster_path} alt='' className='h-60 w-full object-cover'/>
            <p className='font-medium p-2 truncate'>{show.movie.title}</p>
            <div className='flex items-center justify-between px-2'>
              <p className='text-lg font-medium'>
                {currency} {show.showPrice}
                <StarIcon className='w-4 h-4 text-primary fill-primary'/>{show.movie.vote_average.toFixed(1)}
              </p>
            </div>
            <p>{dateFormat(show.showDateTime)}</p>
          </div>
        ))}
      </div>
    </>
  ) : <Loading />
}

export default DashBoard
