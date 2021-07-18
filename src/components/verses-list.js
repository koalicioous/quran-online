import React from 'react'
import VerseItem from './verses-list-item'

export default function VerseList(props){
    const {verses} = props
    console.log(verses.preBismillah)
    return (
        <>
        {
            verses.preBismillah && 
            <VerseItem verse={verses.preBismillah} />
        }
        {
            verses.verses.map((verse,index) => {
                return (
                 <VerseItem verse={verse} index={index} key={index} />
                )
            })
        }
        </>
    )
}