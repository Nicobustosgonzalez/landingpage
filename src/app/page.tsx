"use client";
import { Inter } from 'next/font/google'
import HeroSection from './components/HeroSection';
import Newsletter from './components/Newsletter';
import About from './components/About';
import Footer from './components/Footer';
import NextLink from "next/link";



export default function Home() {
  return (
    <>
    <HeroSection/>
    <Newsletter/>
    <Footer/>
  
    </>
  )
}




