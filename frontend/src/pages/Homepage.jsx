import React from 'react'
import NavBar from '../components/Layout/NavBar'
import Footer from '../components/Layout/Footer'
import Hero from '../components/Layout/Hero/Hero'
import Categories from "../components/Categories/Categories";



const Homepage = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Categories/>
        <Footer/>

    </div>
  )
}

export default Homepage