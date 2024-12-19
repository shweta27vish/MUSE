import React, { useEffect } from 'react'
import{useStateValue} from "../context/StateProvider";
import { getAllUsers, getAllArtists, getAllAlbums, getAllSongs } from '../api';


import {bgColors} from "../utils/styles";
import { actionType} from "../context/reducer"
import { FaUsers } from 'react-icons/fa';
import { GiLoveSong, GiMusicalNotes } from 'react-icons/gi';
import { RiUserStarFill } from 'react-icons/ri';


// export { isActiveStyles, isNotActiveStyles, bgColors };

export const DashboardCard = ({icon,name,count}) => {
  const bg_Color =bgColors[parseInt(Math.random() * bgColors.length)]
  return (
    <div style={{background: `${bg_Color}`}} className='p-4 w-40 gap-3 h-auto rounded-lg shadow-md flex flex-col bg-violet-600'>
      {icon}
      <p className='text-xl text-textColor font-semibold' >{name}</p>
      <p className='text-xl text-textColor ' >{count}</p>
    </div>
  )
}




const DashboardHome = () => {
  const [{ allUsers, allSongs, allArtists, allAlbums }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data, // Ensure `data.data` is an array
        });
      });
    }

    if (!allArtists) {
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist, // Ensure `data.artist` is an array
        });
      });
    }

    if (!allAlbums) {
      getAllAlbums().then((data) => {
        console.log(data);
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album, // Ensure `data.albums` exists and is an array
        });
      });
    }

    if (!allSongs) {
      getAllSongs().then((data) => {
        console.log(data);
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.song, // Ensure `data.songs` is an array
        });
      });
    }
  }, [allUsers, allArtists, allAlbums, allSongs, dispatch]);

  return (
    <div className="w-full p-6 flex items-center justify-evenly flex-wrap">
      <DashboardCard icon={<FaUsers className="text-3xl text-textColor" />} name="Users" count={allUsers ? allUsers.length : 0} />
      <DashboardCard icon={<GiLoveSong className="text-3xl text-textColor" />} name="Songs" count={allSongs ? allSongs.length : 0} />
      <DashboardCard icon={<RiUserStarFill className="text-3xl text-textColor" />} name="Artists" count={allArtists ? allArtists.length : 0} />
      <DashboardCard icon={<GiMusicalNotes className="text-3xl text-textColor" />} name="Albums" count={allAlbums ? allAlbums.length : 0} />
    </div>
  );
};

export default DashboardHome;
