import React from 'react'
import AppLayout from '../layout/app-layout'
import SurahList from '../components/surah-list'

export default function Index(){
  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <AppLayout>
        <main className="mt-2" style={{zIndex:'98'}}>
          <section className="mx-2 sm:mx-0 px-4 py-4 bg-blue-500 text-white rounded-md">
            <h3 className="text-sm">Assalamu'alaikum,</h3>
            <h1 className="text-lg font-bold">Ahlul Jannah, Insya Allah! ✨</h1>
          </section>
          <section className="mt-2 bg-white rounded-md shadow-lg">
            <h1 className="font-semibold py-2 px-8 bg-blue-100 rounded-t-md text-gray-700">Daftar Surat</h1>
            <SurahList />
          </section>
        </main>
      </AppLayout>
    </div>
  )
}