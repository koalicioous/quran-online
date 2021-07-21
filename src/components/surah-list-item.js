import React, {useState,useEffect} from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

export default function SurahItem(props) {

    const location = useLocation()
    const [ atIndex,setAtIndex ] = useState(true)

    useEffect(() => {
        if(location.pathname === '/search'){
            setAtIndex(false)
        }
    },[])

    const {
        number = 0,
        surahName = 'Nama Surat',
        arabicName = 'Arabic Name',
        translation = 'Translasi Surat',
        numberOfVerses = 'Jumlah'
    } = props

    return (
        <div className={"bg-white border-b border-gray-200 " + (atIndex ? 'py-1' : '')}>
            <Link to={`/surah/${number}` } className="flex items-center px-8">
                {
                    atIndex &&
                    <div className="p-2 bg-gray-50 text-blue-500 rounded-full shadow bg-opacity-50 backdrop-filter backdrop-blur w-8 h-8 flex items-center justify-center text-xs font-bold">
                        { number }
                    </div>
                }
                <div className="ml-4 flex items-center justify-between flex-grow">
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">{surahName}</h1>
                        <p className="text-xs text-gray-400 mt-1">{translation} — {numberOfVerses} Ayat</p>
                    </div>
                    <div className="relative">
                        <p className="text-lg text-gray-600 arab flex items-center flex-col">
                            {arabicName}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}