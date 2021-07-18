import React, {useState,useEffect} from 'react'
import SurahItem from './surah-list-item'
import { getAllSurah } from '../api/fetch-quran'

export default function SurahList() {
    const [ surah,setSurah ] = useState([])

    useEffect(() => {
        async function getSurah(){
            const surah = await getAllSurah()
            setSurah(surah)
        }
        getSurah()
    },[])
    
    return (
        surah.map( surah => {
            return <SurahItem
                key={surah.number}
                number={surah.number}
                surahName={surah.name.transliteration.id}
                translation={surah.name.translation.id}
                numberOfVerses={surah.numberOfVerses}
                arabicName={surah.name.short}
            />
        })
    )
}