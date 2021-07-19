import React, { useState } from 'react'
import { useLocation  } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

export default function Navbar(){

    const [location] = useState(useLocation())

    return (
        <nav className="bg-white px-8 py-4 shadow sticky top-0" style={{zIndex:'99'}}>
            {
                location.pathname !== '/' &&
                <Link to="/" className="mr-3">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            }
            <span className={location.pathname === '/' ? 'text-md font-bold text-gray-600' : 'text-xs font-bold text-gray-6pp'}>
                {location.pathname === '/' ? '💫  Al-Quran Karim' : 'Daftar Surat'}
            </span>
        </nav>
    )
}