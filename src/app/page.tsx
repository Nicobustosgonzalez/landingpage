"use client";
import { Inter } from 'next/font/google'
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';



export default function Home() {
  return (
    <>
    <HeroSection/>
    <Features/>
    <Footer/>
    </>
  )
}




