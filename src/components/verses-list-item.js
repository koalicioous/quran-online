import React, { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import db from '../api/db'

export default function VerseItem(props){
    const {verse,index,number,surahName} = props
    const [isSaved,setIsSaved] = useState(false)
    const [isTafsirOpen,setIsTafsirOpen] = useState(false)
    const [tafsirLong,setTafsirLong] = useState(false)

    useEffect( () => {
        async function isSaved(){
            const lastVerse = await db.lastVerse.where('inQuran').equals(verse.number.inQuran).toArray()
            if(lastVerse.length > 0) {
                return setIsSaved(true)
            }
        }

        if (verse.number) isSaved()
    },[isSaved,verse.number])

    const saveHandle = async () => {
        let lastVerse = await db.lastVerse.toArray()
        if(lastVerse.length === 0){
            db.lastVerse.add({
                number: number,
                verse: verse.number.inSurah,
                inQuran: verse.number.inQuran
            })
            .then(() => {
                return setIsSaved(true)
            })
        }
        if(lastVerse.length > 0 && lastVerse[0].inQuran === verse.number.inQuran){
            db.lastVerse.where('inQuran').equals(verse.number.inQuran).delete()
            .then(() => {
                return setIsSaved(false)
            })
        }
        if(lastVerse.length > 0 && lastVerse[0].inQuran !== verse.number.inQuran){
            db.lastVerse.where('inQuran').equals(lastVerse[0].inQuran)
            .modify({
                number: number,
                verse: verse.number.inSurah,
                inQuran: verse.number.inQuran
            })
            .then(() => {
                return setIsSaved(true)
            })
        }
    }

    return (
        <div className={'px-8 py-3 flex flex-col ' + (index % 2 === 0 ? 'bg-white' : 'bg-gray-50')} id={verse.number ? verse.number.inSurah : 0}>
            <div className="flex items-center justify-between">
                <span className="text-sm font-bold">{verse.number ? verse.number.inSurah + '.' : ''}</span>
                <div className="flex items-center">
                    {
                        verse.number &&
                        <button className={"transition-all text-xs py-1 px-3 rounded-md border mr-3 " + (isTafsirOpen ? ' bg-blue-500 text-white' : 'text-gray-400')} onClick={() => setIsTafsirOpen(!isTafsirOpen)}>
                            Lihat Tafsir
                        </button>
                    }
                    {
                        verse.number &&
                        <button className={"min-w-8 h-8 flex transition-all items-center " + (isSaved ? 'text-blue-500' : 'text-gray-300')} onClick={() => saveHandle()}>
                            <FontAwesomeIcon icon={faBookmark} className="text-xs" />
                            {
                                isSaved &&
                                <span className="text-xs text-blue-900 ml-2">
                                    Terakhir dibaca
                                </span>
                            }
                        </button>
                    }
                </div>
            </div>
            <div className="text-right text-3xl arab mt-3">
                {verse.text.arab}
            </div>
            <div className="mt-3 text-xs text-gray-500 leading-relaxed">
                {verse.translation.id}
            </div>
            {
                isTafsirOpen &&
                <div className="bg-gray-100 py-3 px-4 text-xs whitespace-pre-line text-justify mt-2 rounded-lg">
                    <h1 className="font-bold text-gray-500">Tafsir surat {surahName} ayat {verse.number.inSurah}</h1>
                    <p className="mt-2 text-gray-500">{verse.tafsir.id.short}</p>
                    {
                        tafsirLong &&
                        <p className="mt-2 text-gray-500">
                            {verse.tafsir.id.long}
                        </p>
                    }
                    <button className="mt-3 flex items-center text-gray-500 bg-gray-200 px-3 py-1 rounded-full" onClick={() => setTafsirLong(!tafsirLong)}>
                        <span className="mr-2">
                            {tafsirLong ? 'Versi pendek' : 'Baca versi panjang'}
                        </span>
                        <FontAwesomeIcon icon={tafsirLong ? faChevronUp : faChevronDown} />
                    </button>
                </div>
            }
        </div>
    )
}