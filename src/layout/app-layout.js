import React from 'react'
import Navbar from '../components/navbar'

export default function AppLayout({children}){
    return (
        <div className="w-full max-w-2xl mx-auto">
            <Navbar />
            { children }
        </div>
    )
}