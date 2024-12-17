import React from 'react'

const Transitiontransform = () => {
  return (
    <div><h1 className='text-[50px] bg-red-400 text-center '>Transition and Transform with Tailwind</h1>
    <div className='flex justify-center'><h2 className='text-[40px] bg-yellow-300 w-[800px] text-center'>what is transition?what is Transform</h2></div>
   <div className='flex justify-center'><p className='bg-orange-500 w-[800px]'> transition is a time duration or you can say "annimation k lie time duration dena" or transform ka matlab shape , size position etc ko change karna lets have a look on the example:</p></div>
   {/* changing color on hover without transition */}
   <button className='bg-orange-400 p-2 m-10 text-white rounded hover:bg-orange-900 '>
    bg-color on hover without transition</button>
     
    {/* with transition {transition gives a smooth effect by changing color} */}
   <button className='bg-orange-400 p-2 m-10 text-white rounded hover:bg-orange-900 transition duration-1000'>
    bg-color on hover with transition</button>

    {/* opacity on hover  without transition {what is opacity ? its a color transprancy}*/}
    <button className='bg-green-400 p-2 m-10 text-white rounded hover:opacity-5'>
    opacity on hover without transition</button>
      
     {/* opacity on hover with transition  */}

     <button className='bg-green-400 p-2 m-10 text-white rounded hover:opacity-5 transition duration-1000'>
    opacity on hover with transition</button>
    <br></br>
    
    {/* rotate on hover */}

    
    <button className='bg-red-500 p-2 m-10 text-white rounded hover:rotate-45'>
    rotate on hover without transition</button>

    {/* rotae on hover with transition */}
    
    <button className='bg-red-500 p-2 m-10 text-white rounded hover:rotate-45 transition-transform duration-1000 '>
    rotate on hover with transition</button>

    {/* scale on hover without transition */}

    
    <button className='bg-pink-500 p-2 m-10 text-white rounded hover:scale-150 '>
    scale on hover without transition</button>

    {/* scale on hover without transition */}

    
    <button className='bg-pink-500 p-2 m-10 text-white rounded hover:scale-150 transition-transform duration-1000'>
    scale on hover with transition</button>

    
    {/* scale-x on hover without transition  it will change the size on x axis*/}

    
    <button className='bg-blue-500 p-2 m-10 text-white rounded hover:scale-x-150 '>
    scale-x axis on hover without transition</button>

    
    {/* scale on hover without transition */}

    
    <button className='bg-blue-500 p-2 m-10 text-white rounded hover:scale-x-150 transition-transform duration-1000'>
    scale-x-axis on hover with transition</button>

    
    {/* scale-y axis on hover without transition  it will change the size on y axis*/}

    
    <button className='bg-purple-500 p-2 m-10 text-white rounded hover:scale-y-150 '>
    scale-y axis on hover without transition</button>

    
    {/* scale-y axis on hover with transition  it will change the size on y axis*/}

    
    <button className='bg-purple-500 p-2 m-10 text-white rounded hover:scale-y-150 transition-transform duration-1000'>
    scale-y axis on hover with transition</button>

    
    
    
    
    </div>
  )
}

export default Transitiontransform