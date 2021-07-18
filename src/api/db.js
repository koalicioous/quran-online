import Dexie from 'dexie'

const db = new Dexie('quran-online')
db.version(1).stores({
    lastVerse: 'number,verse,inQuran'
})

export default db;