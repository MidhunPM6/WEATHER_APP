import React from 'react'
import sunimg from './assets/sun.png'
import humidityimg from './assets/humidity.png'
import windimg from './assets/wind.png'

const App = () => {
  return (
    <div>
      <div className='bg-gradient-to-r  from-slate-950 to-slate-800 h-dvh flex place-content-center'>
        <div className='bg-gradient-to-r from-violet-600 to-violet-950 w-72 max-h-[60vh] mt-32 rounded-lg shadow-2xl shadow-stone-800'> 
          <div className='flex place-content-center mt-6'>
          <input type="text"  placeholder='Search' className='m-2 border-none outline-none rounded-full py-2 px-2'/>
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 bg-white rounded-full p-1 w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
          </button>
          </div>
          <div className='flex flex-col items-center mt-6 text-white'>
            <img src={sunimg} alt="" className='w-20 ' />
            <h1 className='mt-6 text-5xl'>40°C </h1>
            <p className='mt-2 text-3xl'>London</p>
          </div>
          <div className='flex justify-between text-white'>
            <div className='p-7' >
            <img src={humidityimg} alt=""  className='w-12 bg-white rounded-full p-2'/>
            <h1 className='pt-2'>70%</h1>
            <span>Humidity</span>
            </div>
          
          <div className=' p-7'>
            <img src={windimg} alt="" className='w-12 bg-white rounded-full p-2'/>
            <h1 className='pt-2'>10 Km/h</h1>
            <span>Wind</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
