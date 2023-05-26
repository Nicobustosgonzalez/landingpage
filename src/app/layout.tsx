"use client";
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from "react";
import NavBar from './components/NavBar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <div>
            <NavBar/>
          </div>
          {children}
          <div>
            
          </div>
          
          </ChakraProvider>
        </body>
    </html>
  )
}
