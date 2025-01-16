import React from 'react'
import './globals.css'
import { Metadata } from 'next'

export const metadata :Metadata= {
  title: 'Tech Agency',
  description: 'Modern Software Development Agency',
  
}

export default function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}