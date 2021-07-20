import React, {useState,useEffect} from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import SurahList from '../components/surah-list'

export default function Search(){

    const [term,setTerm] = useState('')

    const searchChangeHandle = (event) => {
        setTerm(event.target.value)
    }

    return (
        <section className="max-w-2xl bg-white mx-auto border-l border-r">
            <div className="py-2 px-4 border-b flex items-center sticky top-0 bg-white shadow-md" style={{zIndex:'100'}}>
                <Link to="/" className="py-3 px-4 -my-3 -ml-4">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <input className="px-3 py-2 text-sm flex-grow bg-gray-100 rounded-md focus:bg-gray-50 transition-all" placeholder="Coba ketik Al-Baqarah" onChange={searchChangeHandle} />
            </div>
            <SurahList searchTerm={term} />
        </section>
    )
}