"use client";
import { Inter } from 'next/font/google'
import HeroSection from './components/HeroSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';




export default function Home() {
  return (
    <>
    <HeroSection/>
    <Newsletter/>
    <Footer/>
  
    </>
  )
}




