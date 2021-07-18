import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { Router } from '@reach/router'
import AppLayout from '../layout/app-layout'
import SurahContainer from '../components/surah'

const Navigate = () => {
    useEffect(() => {
        navigate('/')
    },[])
    return null
}

export default function Surah() {
    return (
        <AppLayout>
            <Router basepath='/surah'>
                <Navigate path="/" />
                <SurahContainer path=":surahNumber" />
            </Router>
        </AppLayout>
    )
}
