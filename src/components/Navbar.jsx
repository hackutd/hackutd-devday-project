import React from 'react'
import {ReactComponent as Logo} from '../assets/logo.svg'
function Navbar() {
  return (
    /*
    *
    * Successfully made the component for the navbar
    * Keep in mind how the navbar has sticky and top-0 so that it stays at the top when scrolling
    * 
    */
    <nav className="sticky top-0 order-first flex items-center gap-[15%] w-screen whitespace-nowrap bg-secondary p-4 text-2xl font-bold text-text-primary" >
        {/* LOGO (make sure to show what happens when flex is off for the div below */}
        <div className="flex ml-12 gap-2">
        
        <div className='px-2'><Logo/></div>
        <h1 className="px-2" >Streeamy</h1>

        </div>


        {/* primary nav */}

    </nav>
  )
}

export default Navbar