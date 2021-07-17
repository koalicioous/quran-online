import React from 'react'
import Navbar from '../components/navbar'

export default function AppLayout({children}){
    return (
        <div className="min-h-screen bg-gray-50 pb-8">
            <div className="w-full max-w-2xl mx-auto">
                <Navbar />
                { children }
            </div>
        </div>
    )
}