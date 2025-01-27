"use client";
import React from 'react'

function page() {
  let marks = 80
  const changeMarks = ()=>{
    console.log(marks);
    marks = 33
    console.log(marks);
  };
  return (
    <>
    <h1 className='font-bold text-2xl'>
      My total mraks were {marks}
    </h1>
    <button onClick= {()=> {changeMarks();
    }}
    className='bg-gray-400 px-5 py-2 rounded mt-5 text-white font-bold'>
      update
    </button>
    </>
  )
    
  
}

export default page