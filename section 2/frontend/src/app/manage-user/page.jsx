import axios from 'axios'
import React, { useEffect } from 'react'

const Manageuser = () => {

const fetchUserData =async () => {
    const res = await axios.get('http://localhost:5000/user/getall');
    console.table(res.data);  
    
}

 useEffect(() => {
   fetchUserData();
 }, []);
 

  return (
    <div>
    <div className='max-w-[80%] mx-auto'>
        <h1 className='text-3xl font-bold text-center'>Manage User</h1>
    </div>
    </div>
  )
}

export default Manageuser;