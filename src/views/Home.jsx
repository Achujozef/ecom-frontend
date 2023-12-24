import React from 'react'
import Navbar from '../components/user/Navbar'
import Banner from '../components/user/Banner'
import Cards from '../components/user/Cards'

const Home = () => {
  return (
    

    <div className=' w-full bg-slate-300 text-center'>
        <Navbar/>
        <Banner/>
        <div className="flex justify-between p-6 w-full">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    </div>
  )
}

export default Home