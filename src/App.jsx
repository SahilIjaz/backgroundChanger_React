import { useState } from "react"


function App() {
const [color,setColor]=useState('red')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

<div className="flex justify-center items-center h-screen p-8 space-x-2">
  <button onClick={()=>setColor('Yellow')} className="bg-cyan-950 text-white px-6 py-2 rounded-lg shadow-lg 
               transition-all duration-300 ease-in-out transform 
               hover:bg-cyan-800 hover:scale-105 
               active:scale-95 active:bg-cyan-700">Yellow</button>

  <button onClick={()=>setColor('Black')} className="bg-cyan-950 text-white px-6 py-2 rounded-lg shadow-lg 
               transition-all duration-300 ease-in-out transform 
               hover:bg-cyan-800 hover:scale-105 
               active:scale-95 active:bg-cyan-700">Black</button>

  <button onClick={()=>setColor('Green')} className="bg-cyan-950 text-white px-6 py-2 rounded-lg shadow-lg 
               transition-all duration-300 ease-in-out transform 
               hover:bg-cyan-800 hover:scale-105 
               active:scale-95 active:bg-cyan-700">Green</button>

  <button onClick={()=>setColor('Blue')} className="bg-cyan-950 text-white px-6 py-2 rounded-lg shadow-lg 
               transition-all duration-300 ease-in-out transform 
               hover:bg-cyan-800 hover:scale-105 
               active:scale-95 active:bg-cyan-700">Blue</button>

  <button onClick={()=>setColor('Indigo')} className="bg-cyan-950 text-white px-6 py-2 rounded-lg shadow-lg 
               transition-all duration-300 ease-in-out transform 
               hover:bg-cyan-800 hover:scale-105 
               active:scale-95 active:bg-cyan-700">Indigo</button>
</div>
</div>
  )
}

export default App
