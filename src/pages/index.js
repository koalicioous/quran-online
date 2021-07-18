import React from 'react'
import {navigate} from 'gatsby'
import db from '../api/db'
import AppLayout from '../layout/app-layout'
import SurahList from '../components/surah-list'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBookOpen } from '@fortawesome/free-solid-svg-icons'

export default function Index(){

  const lastVerse = async () => {
    const lastVerse = await db.lastVerse.toArray()
    if(lastVerse.length > 0) {
      return navigate(`/surah/${lastVerse[0].number}/#${lastVerse[0].verse}`)
    }
    return navigate('/surah/1')
  }

  return (
      <AppLayout>
        <Helmet>
          <title>👨🏻‍💻 Ngaji Online ✨</title>
        </Helmet>
        <main className="mt-2 relative" style={{zIndex:'98'}}>
          <section className="mx-2 sm:mx-0 px-4 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-md">
            <h3 className="text-sm">Assalamu'alaikum,</h3>
            <h1 className="text-lg font-bold">Ahlul Jannah, Insya Allah! ✨</h1>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-2 mx-2 sm:mx-0">
            <button onClick={lastVerse} className="py-3 bg-white rounded-lg shadow-lg flex items-center justify-center text-sm border">
              <FontAwesomeIcon icon={faBookmark} className="text-blue-500" />
              <span className="ml-2 text-blue-900">
                Ayat terakhir dibaca
              </span>
            </button>
            <button className="py-3 bgwhite rounded-lg flex items-center justify-center text-sm bg-gray-300 text-gray-500">
              <FontAwesomeIcon icon={faBookOpen} />
              <span className="ml-2">
                Kajian Quran (Segera)
              </span>
            </button>
          </section>
          <section className="mt-2 bg-white rounded-md shadow-lg">
            <h1 className="font-semibold py-2 px-8 bg-blue-100 rounded-t-md text-gray-700">Daftar Surat</h1>
            <SurahList />
          </section>
        </main>
      </AppLayout>
  )
}