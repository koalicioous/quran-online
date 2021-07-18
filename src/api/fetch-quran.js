import axios from 'axios'


const BASE_URL = 'https://api.quran.sutanlab.id'

const getAllSurah = async () => {
    const res = await axios.get(BASE_URL + '/surah')
    .then( res => {
        return res.data.data
    })
    .catch( err => {
        return err
    })
    return res
}

const getSurahVerses = async (number) => {
    const res = await axios.get(BASE_URL + `/surah/${number}`)
    .then( res => {
        return res.data.data
    })
    .catch( err => {
        return err
    })
    return res
}

const getNextSurah = async (number) => {
    if (number == 114) return null
    const res = await axios.get(BASE_URL + `/surah/${number+1}`)
    .then( res => {
        return res.data.data
    })
    .catch( err => {
        return err
    })
    return res.name.transliteration.id
}

const getPrevSurah = async (number) => {
    if (number < 2) return null
    const res = await axios.get(BASE_URL + `/surah/${number-1}`)
    .then( res => {
        return res.data.data
    })
    .catch( err => {
        return err
    })
    return res.name.transliteration.id
}

export {
    getAllSurah,
    getSurahVerses,
    getNextSurah,
    getPrevSurah
}