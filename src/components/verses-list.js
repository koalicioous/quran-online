import React, { useEffect } from 'react'
import VerseItem from './verses-list-item'
import { navigate } from 'gatsby'
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
        <>
        {
            verses.preBismillah && 
            <VerseItem verse={verses.preBismillah} />
        }
        {
            verses.verses.map((verse,index) => {
                return (
                 <VerseItem verse={verse} index={index} key={index} number={verses.number} />
                )
            })
        }
        </>
    )
}