// import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScholarshipListing from "../components/ScholarshipListing";
import Footer from "../components/Footer"
export const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Hero/>
        <ScholarshipListing/>
        <Footer/>
    </div>
    </>
  )
}

export default Home