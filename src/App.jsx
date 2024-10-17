import React from 'react'

const App = () => {
  return (
    <div>
      <div className='bg-stone-900 h-dvh flex place-content-center'>
        <div className='bg-gradient-to-r from-green-600 to-green-950 w-80 max-h-[60vh] mt-32 rounded-lg shadow shadow-2xl'> 
          <div className='flex place-content-center mt-10'>
          <input type="text"  placeholder='Search' className='m-2 border-none outline-none rounded-full py-1 px-4'/>
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
