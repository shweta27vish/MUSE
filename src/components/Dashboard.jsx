import React from 'react';
import Header from './Header';
import { NavLink, Route, Routes } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { isActiveStyles, isNotActiveStyles } from '../utils/styles';
import DashboardHome from './DashboardHome';
import DashboardUsers from './DashboardUsers';
import DashboardSongs from './DashboardSongs';
import DashboardArtists from './DashboardArtists';
import DashboardAlbums from './DashboardAlbums';

const Dashboard = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-violet-400'>
      <Header />
      <div className='w-[60%] bg-violet-400 p-4 flex items-center justify-evenly'>
        <NavLink to={"/dashboard/home"} className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}>
          <IoHome className='text-2xl text-textColor' />
        </NavLink>
        <NavLink to={"/dashboard/user"} className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}>Users</NavLink>
        <NavLink to={"/dashboard/songs"} className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}>Songs</NavLink>
        <NavLink to={"/dashboard/artist"} className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}>Artists</NavLink>
        <NavLink to={"/dashboard/albums"} className={({ isActive }) => (isActive ? isActiveStyles : isNotActiveStyles)}>Albums</NavLink>
      </div>

      <div className='my-4 w-full p-4'>
        <Routes>
          <Route path='/home' element={<DashboardHome />} />
          <Route path='/user' element={<DashboardUsers />} />
          <Route path='/songs' element={<DashboardSongs />} />
          <Route path='/artist' element={<DashboardArtists />} />
          <Route path='/albums' element={<DashboardAlbums />} />
          <Route path='/newSong' element={<DashboardHome />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard;
