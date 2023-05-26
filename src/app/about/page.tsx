"use client";
import { Inter } from 'next/font/google'
import Abouttext from '../components/Abouttext';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import NextLink from "next/link";


export default function About() {
    return (
      <main>
      
      <Abouttext/>
      <Carousel/>
      <Footer/>
    </main>
      
    )
  }
  