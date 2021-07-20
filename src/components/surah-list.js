import React, {useState,useEffect} from 'react'
import SurahItem from './surah-list-item'
import { getAllSurah } from '../api/fetch-quran'

export default function SurahList(props) {
    const [ surahs,setSurahs ] = useState([])
    const { searchTerm = '' } = props

    useEffect(() => {
        async function getSurah(){
            const surahs = await getAllSurah()
            setSurahs(surahs)
        }
        getSurah()
    },[])
    
    return (
        <>
            {
                !searchTerm && 
                surahs.map( surah => {
                    return <SurahItem
                        key={surah.number}
                        number={surah.number}
                        surahName={surah.name.transliteration.id}
                        translation={surah.name.translation.id}
                        numberOfVerses={surah.numberOfVerses}
                        arabicName={surah.name.short}
                        tafsir={surah.tafsir.id}
                    />
                })
            }
            {
                searchTerm &&
                surahs.filter(surah => (surah.name.transliteration.id.toLowerCase().includes(searchTerm.toLowerCase())))
                .map( surah => {
                    return <SurahItem
                        key={surah.number}
                        number={surah.number}
                        surahName={surah.name.transliteration.id}
                        translation={surah.name.translation.id}
                        numberOfVerses={surah.numberOfVerses}
                        arabicName={surah.name.short}
                        tafsir={surah.tafsir.id}
                    />
                })
            }
        </>
    )
}