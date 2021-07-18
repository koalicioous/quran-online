import React from 'react'

export default function VerseItem(props){
    const {verse,index} = props

    return (
        <div className={'px-8 py-3 flex flex-col ' + (index % 2 === 0 ? 'bg-white' : 'bg-gray-50')}>
            <div>
                <span className="text-sm font-bold">{verse.number ? verse.number.inSurah + '.' : ''}</span>
            </div>
            <div className="text-right text-3xl arab mt-3">
                {verse.text.arab}
            </div>
            <div className="mt-3 text-xs text-gray-500 leading-relaxed">
                {verse.translation.id}
            </div>
        </div>
    )
}