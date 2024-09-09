"use client"
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const layout = ({children}) => {
  return (
    <main>
      <Navbar/>
      {children}
      <Footer/>
    </main>
  )
}

export default layout
