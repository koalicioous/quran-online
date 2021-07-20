import React, { useEffect } from 'react'
import VerseItem from './verses-list-item'
import { navigate, Link } from 'gatsby'
import { useLocation } from '@reach/router'

export default function VerseList(props){
    const location = useLocation()
    const {verses} = props

    useEffect(() => {
        if(location.hash.length > 0){
            setTimeout(() => {
                navigate(`${location.pathname}${location.hash}`)
            }, 500);
        }
    },[])

    return (
        <div className="relative">
            <div className="sticky top-0 py-4 font-bold text-right sm:text-center pr-4 sm:pr-0 grid grid-cols-2" style={{zIndex:'100'}}>
                <Link to="/" className="-mt-4 -mb-3"></Link>
                ۞ {verses.name.transliteration.id} ۞
            </div>
            {
                verses.preBismillah && 
                <VerseItem verse={verses.preBismillah} />
            }
            {
                verses.verses.map((verse,index) => {
                    return (
                     <VerseItem verse={verse} index={index} key={index} number={verses.number} surahName={verses.name.transliteration.id} />
                    )
                })
            }
        </div>
    )
}