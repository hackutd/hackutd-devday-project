import React from 'react'

import Dashboard from '../components/Dashboard'
// 1. Copy the homepage from App.js to this new page
function Home() {
    return (
        <div className="App min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
          
    
          <section className="flex w-full flex-col justify-center gap-4 px-[16vw] py-12">
            <h2 className="mb-4 text-2xl font-bold">Anime List</h2>
    
            <Dashboard/>
    
          </section>
        </div>
    )
}

export default Home