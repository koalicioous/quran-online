import axios from 'axios'


const BASE_URL = 'https://api.quran.sutanlab.id/'

const getAllSurah = async () => {
    const res = await axios.get(BASE_URL + 'surah')
    .then( res => {
        return res.data.data
    })
    .catch( err => {
        return err
    })
    return res
}

export {
    getAllSurah
}