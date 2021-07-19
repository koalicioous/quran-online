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
    tafsir: {
        id:''
    },
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
                <meta name="description" content={surah.tafsir.id + ' ' + surah.tafsir.id} />
            </Helmet>
            <section>
                <VerseList verses={surah} />
            </section>
            <section className="py-3 mt-3 px-4 bg-gray-100 whitespace-pre-line">
                <h1 className="font-bold text-gray-700">Tafsir Ringkas Surah {surah.name.transliteration.id }</h1>
                <p className="text-xs mt-2 text-gray-400">{surah.tafsir.id}</p>
            </section>
            <SurahNavigation number={surah.number}/>
        </>
    )
}