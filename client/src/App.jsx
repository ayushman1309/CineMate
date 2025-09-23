
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import SeatLayout from './pages/SeatLayout'
import Mybooking from './pages/Mybooking'
import Moviedetails from './pages/Moviedetails'
import Favorite from './pages/Favorite'
import {Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/Admin/Layout'
import DashBoard from './pages/Admin/DashBoard'
import ListShows from './pages/Admin/ListShows'
import ListBookings from './pages/Admin/ListBookings'
import AddShows from './pages/Admin/AddShows'



const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')


  return (
    <>
      <Toaster />

      {!isAdminRoute && <Navbar/> }
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/movies' element = {<Movies/>} />
        <Route path = '/movies/:id' element = {<Moviedetails/>} />
        <Route path = '/movies/:id/:date' element = {<SeatLayout/>} />
        <Route path = '/my-bookings' element = {<Mybooking/>} />
        <Route path = '/favorite' element = {<Favorite/>} />
        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<DashBoard />}/>
          <Route path='add-shows' element={<AddShows />}/>
          <Route path='list-shows' element={<ListShows />}/>
          <Route path='list-bookings' element={<ListBookings />}/>


        </Route>
        

      </Routes>
      {!isAdminRoute && <Footer/> }
    </>
  )
}

export default App
