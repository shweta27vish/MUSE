import axios from "axios";
const baseURL="http://localhost:4000"


export const validateUser=async(token)=>{
    try{
        const res= await axios.get(`${baseURL}/api/users/login`,{
            headers :{
                Authorization:"Bearer "+ token,
            },
        });
        return res.data;

    }
    
    catch(error){

    }
    
}
export const getAllUsers=async()=>{
    try {
        const res=   await axios.get(`${baseURL}/api/users/getUsers`);
        return res.data;

    } catch (error) {
        return null;
        
    }
}
// allSongs

export const getAllSongs=async()=>{
    try {
        const res=   await axios.get(`${baseURL}/api/songs/getAll`);
        return res.data;

    } catch (error) {
        return null;
        
    }
}



// all albums
export const getAllAlbums=async()=>{
    try {
        const res=   await axios.get(`${baseURL}/api/albums/getAll`);
        return res.data;

    } catch (error) {
        return null;
        
    }
}



// export const getAllAlbums = async () => {
//     try {
//         const res = await axios.get(`${baseURL}/api/albums/getAll`);
//         console.log("Albums API Response:", res.data); // Log response
//         return res.data;
//     } catch (error) {
//         console.error("Error fetching albums:", error.message);
//         return null;
//     }
// };



// export const getAllAlbums = async () => {
//     try {
//         const res = await axios.get(`${baseURL}/api/albums/getAll`);
//         console.log("Albums fetched from API:", res.data);
//         return res.data;
//     } catch (error) {
//         console.error("Error fetching albums:", error.message);
//         return null;
//     }
// };



// all artist
export const getAllArtists=async()=>{
    try {
        const res=   await axios.get(`${baseURL}/api/artists/getAll`);
        return res.data;

    } catch (error) {
        return null;
        
    }
}


