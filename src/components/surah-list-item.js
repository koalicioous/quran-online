import React from 'react'
import { Link } from 'gatsby'

export default function SurahItem(props) {

    const {
        number = 0,
        surahName = 'Nama Surat',
        translation = 'Translasi Surat',
        numberOfVerses = 'Jumlah'
    } = props

    return (
        <div className="py-4 bg-white border-b border-gray-200">
            <Link to={`/surah/${number}` } className="flex items-center px-8">
                <div className="p-2 bg-blue-50 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold">
                    { number }
                </div>
                <div className="ml-4 flex items-center justify-between flex-grow">
                    <div>
                        <p className="text-sm font-semibold text-gray-800">{surahName}</p>
                        <p className="text-xs text-gray-500 mt-1">{translation}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-600">{numberOfVerses} Ayat</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}