import React from 'react'
import {ReactComponent as Logo} from '../assets/logo.svg'
function Navbar() {
  return (

    <nav className="sticky top-0 z-10 flex items-center gap-[15%] w-screen whitespace-nowrap bg-secondary p-4 text-2xl font-bold text-text-primary" >
        
        <div className="flex ml-12 gap-2">
        
        <div className='px-2'><Logo/></div>
        <h1 className="px-2" >Streeamy</h1>

        </div>


        {/* primary nav */}

    </nav>
  )
}

export default Navbar