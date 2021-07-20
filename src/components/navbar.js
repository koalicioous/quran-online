import React, { useState } from 'react'
import { useLocation  } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

export default function Navbar(){

    const [location] = useState(useLocation())

    return (
        <nav className="px-8 py-4 shadow-lg sticky top-0 flex items-center justify-between backdrop-filter backdrop-blur" style={{zIndex:'99'}}>
            <div>
                {
                    location.pathname === '/' &&
                    <span className='text-md font-bold text-gray-700'>
                        <h1>Al-Qur'an Karim</h1>
                    </span>
                }
                {
                    location.pathname !== '/' &&
                    <Link to="/" className="mr-3 flex items-center">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span className="text-sm font-bold text-gray-600 ml-3">
                            Daftar Surat
                        </span>
                    </Link>
                }
            </div>
                {
                    location.pathname === '/' &&
                    <Link to="/search" className="text-xs shadow backdrop-filter backdrop-blur bg-gray-200 opacity-50 rounded-full py-2 -my-2 -mr-3 sm:mr-0 text-gray-700 px-3">
                        <FontAwesomeIcon icon={faSearch} className="opacity-100" />
                        <span className="ml-2 text-gray-900 opacity-100">Coba ketik Al-Baqarah</span>
                    </Link>
                }
        </nav>
    )
}