'use client';
import React from 'react'

const EventHandling = () => {

  const previewImage = (e) => { 
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload =(data) => {
       const img = document.createElement('img');
       img.src= data.target.result;
       document.body.appendChild(img);
    }
    
    reader.readAsDataURL(file);

   }

  return (
    <div className='max-w-[80%] mx-auto'>

     <h1 className='text-3xl font-bold text-center my-6'>Event handling</h1>
     <hr />

     <button
     onClick={ () => { alert('button was clicked');}}
     className='border rounded-md p-3 bg-gray-300'
    >Click me</button>

    <input
    onChange={(e) => { console.log(e.target.value);}}
    className='w-full px-3 py-1 border-2 mt-5'
    type="text" />
     
     <input 
      onChange={(e) => { document.body.style.backgroundColor = e.target.value }}
     className='mt-5' type="color" />

     <input 
     multiple
     accept='image/*'
     onChange={(e) => { console.log(e.target.files);}}
     type="file" />
     <input onChange={previewImage} accept='image/*' type="file" />

    </div>
  )
}

export default EventHandling;