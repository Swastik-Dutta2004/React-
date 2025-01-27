import React from 'react'

const page = () => {
  let marks = 80 
  return (
    <>
    <h1>My marks were {marks}</h1>
    <button onClick={()=>{
      marks = 33
    }}>update</button>
    </>
  )
}

export default page