import React, {useEffect,useState} from 'react'
import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { getNextSurah,getPrevSurah } from '../api/fetch-quran'

export default function SurahNavigation(props){

    const [next,setNext] = useState(null)
    const [prev,setPrev] = useState(null)

    useEffect(() => {
        async function getNext(){
            const res = await getNextSurah(props.number)
            setNext(res)
        }

        async function getPrev(){
            const res = await getPrevSurah(props.number)
            setPrev(res)
        }

        if(props.number){
            getNext()
            getPrev()
        }
    },[props.number])

    return (
        <div className="px-4 w-full sticky bottom-4 mt-3">
            <div className="bg-white py-3 rounded-full shadow-lg grid grid-cols-2">
               <Link to={ !prev ? `/surah/${props.number}` : `/surah/${props.number - 1}` } className={"px-4 flex items-center justify-between"}>
                    <FontAwesomeIcon icon={faArrowLeft} className={ !prev ? 'text-gray-300' : 'text-blue-500' } />
                    <span className={"text-xs sm:text-sm flex-grow text-center " + (!prev ? 'text-gray-400' : 'text-gray-800') }>{!prev ? 'Tidak tersedia' : prev}</span>
               </Link>
               <Link to={ !next ? `/surah/${props.number}` : `/surah/${props.number + 1}` } className="px-4 flex items-center justify-between border-l border-gray-300">
                    <span className={"text-xs sm:text-sm flex-grow text-center " + (!next ? 'text-gray-400' : 'text-gray-800') }>{!next ? 'Tidak tersedia' : next}</span>
                    <FontAwesomeIcon icon={faArrowRight} className={ !next ? 'text-gray-300' : 'text-blue-500' }  />
               </Link>
            </div>
        </div>
    )
}