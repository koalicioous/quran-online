import React, { useEffect,useState } from 'react'
import { getSurahVerses } from '../api/fetch-quran'
import VerseList from './verses-list'
import { Helmet } from 'react-helmet'
import SurahNavigation from './surah-navigation'

const Surah = {
    name: {
        transliteration: {
            id: ''
        }
    },
    tafsir: '',
    verses: []
}

export default function SurahContainer(props){

    const [ surah,setSurah ] = useState(Surah)
    const { surahNumber } = props

    useEffect(() => {
        async function getVerses() {
            const surah = await getSurahVerses(surahNumber)
            setSurah(surah)
        }
        getVerses()
    },[surahNumber])

    return (
        <>
            <Helmet>
                <title>{surah.name.transliteration.id} — Ngaji Online</title>
                <meta name="description" content={surah.tafsir.id} />
            </Helmet>
            <section>
                <VerseList verses={surah} />
                <SurahNavigation number={surah.number}/>
            </section>
        </>
    )
}