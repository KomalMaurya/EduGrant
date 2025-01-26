// import React from 'react'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ScholarshipListing from "../components/ScholarshipListing";
export const Home = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Hero/>
        <ScholarshipListing/>
    </div>
    </>
  )
}

export default Home