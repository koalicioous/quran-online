import React from 'react'
import {navigate} from 'gatsby'
import db from '../api/db'
import AppLayout from '../layout/app-layout'
import SurahList from '../components/surah-list'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBookOpen, faCode, faServer } from '@fortawesome/free-solid-svg-icons'

export default function Index(){

  const lastVerse = async () => {
    const lastVerse = await db.lastVerse.toArray()
    if(lastVerse.length > 0) {
      return navigate(`/surah/${lastVerse[0].number}#${lastVerse[0].verse}`)
    }
    return navigate('/surah/1')
  }

  return (
      <AppLayout>
        <Helmet>
          <title>👨🏻‍💻 Ngaji Online ✨</title>
          <meta name="description" content="Ngaji Online adalah sebuah website untuk membaca Al-Qur'an yang sederhana dan mudah digunakan. Mari senantiasa semangat menambah pahala!" />
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
          <section className="bg-white p-4 mt-3 rounded-md">
            <div className="text-xs text-gray-500">Al-Qur'an Online Simple by <a href="https://www.instagra.com/koalicioous" target="_blank" rel="noreferrer" className="text-blue-500 font-bold">Koalicioous.</a> ◦ Jangan sedih dan putus asa karena sesungguhnya Allah selalu bersama kita!</div>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a href="https://github.com/koalicioous/quran-online" target="_blank" rel="noreferrer" className="text-xs flex items-center text-blue-500 hover:text-blue-800 transition-all">
                <FontAwesomeIcon icon={faCode} />
                <span className="ml-2">Source Code (It's Open!)</span>
              </a>
              <a href="https://trakteer.id/koalicioous" target="_blank" rel="noreferrer" className="text-xs flex items-center text-blue-500 hover:text-blue-800 transition-all">
                <FontAwesomeIcon icon={faServer} />
                <span className="ml-2">Bantu urunan server</span>
              </a>
              
            </div>
          </section>
          <section className="mt-3 px-2 sm:px-0" style={{fontSize:'8px'}}>
            <p>Alquran merupakan kitab suci umat Islam yang menjadi pedoman hidup bagi kaum muslimin. Oleh karena itu, ada banyak keutamaan membaca Alquran bagi orang muslim yang mengerjakannya. Selain akan mendapatkan pahala, tentunya ada banyak kebaikan lain yang dimiliki Alquran.
              Dilansir NU Online, membaca Alquran juga termasuk dalam ibadah paling utama di antara ibadah-ibadah yang lain. Hal ini sebagaimana hadis yang diriwayatkan oleh an-Nu‘man ibn Basyir. Rasulullah SAW bersabda: “Sebaik-baiknya ibadah umatku adalah membaca Alquran.” (HR Baihaqi).
              Menurut para ulama tafsir, adanya perintah menyimak bacaan Alquran berarti juga adanya perintah untuk membaca Alquran. Sebab, jika mendengar saja sudah mengundang rahmat bagi yang mendengarkannya, apalagi membacanya dengan rutin.</p>
            <p>
            Salah satu keutamaan membaca Alquran bahkan disebutkan secara detil. Hadits tentang keutamaan membaca Alquran yang cukup dikenal adalah hadits riwayat Abdullah Ibnu Mas‘ud yang menyatakan, setiap huruf yang dibaca akan diberi balasan satu kebaikan. ‘Abdullah ibn Mas‘ud berkata:
            Rasulullah SAW bersabda: “Siapa saja membaca satu huruf dari Kitabullah (Al-Qur’an), maka dia akan mendapat satu kebaikan. Sedangkan satu kebaikan dilipatkan kepada sepuluh semisalnya. Aku tidak mengatakan alif lâm mîm satu huruf. Akan tetapi, alif satu huruf, lâm satu huruf, dan mîm satu huruf.” (HR At-Tirmidzi).
            Selain itu, ada juga keutamaan membaca Alquran lainnya, yaitu:</p>

            <h1>1. Keutamaan Mempelajari dan Mengajarkan</h1>
            <p>
              Saat mempelajari dan mengajarkan Alquran, seseorang akan mendapatkan nilai pahala yang tinggi. Hal ini sesuai dengan sabda Rasulullah SAW: “Sebaik-baik kalian adalah siapa yang memperlajari Alquran dan mengamalkannya.” (HR Bukhari).
            </p>
            <h1>2. Keutamaan Menghafal dan Pandai Membacanya</h1>
            <p>
              Rasulullah SAW bersabda: “Perumpamaan orang yang membaca Alquran sedang ia hafal dengannya bersama para malaikat yang suci dan mulia, sedang perumpamaan orang yang membaca Alquran sedang ia senantiasa melakukannya meskipun hal itu sulit baginya maka baginya dua pahala.” (Muttafaq ‘alaih).
            </p>
            <h1>3. Diberi Pahal yang Berlimpah</h1>
            <p>
              Rasulullah SAW bersabda: “Siapa saja membaca Alquran, mempelajarinya dan mengamalkannya, maka dipakaikan kepada kedua orang tuanya pada hari kiamat mahkota dari cahaya dan sinarnya bagaikan sinar matahari,
              dan dikenakan pada kedua orang tuanya dua perhiasan yang nilainya tidak tertandingi oleh dunia. Keduanya pun bertanya, ‘bagaimana dipakaikan kepda kami semuanya itu?’ Dijawab, ‘karena anakmu telah membawa Alquran.” (HR Al-Hakim).
            </p> 
            <h1>4. Memberi Syafa’at di Akhirat</h1>
            <p>
              Ini akan menjadi keutamaan membaca Alquran yang berharga bagi umat muslim. Ini sesuai dengan keterangan Rasulullah SAW saat bersabda: “Puasa dan Alquran, keduanya akan memberikan syafa’at kepada seorang hamba pada hari kiamat…” (HR Ahmad dan Al-Hakim).
            </p>
            <h1>5. Dapat Menentramkan Hati</h1>
            <p>
            Dalam Alquran, Allah SWT berfirman: “(yaitu) orang-orang yang beriman dan hati mereka manjadi tenteram dengan mengingat Allah. Ingatlah, hanya dengan mengingati Allah-lah hati menjadi tenteram.” (QS Ar-Rad: 28).
            </p>
            <h1>6. Dikaruniakan Hati yang Bercahaya</h1>
            <p>
            Diriwayatkan dari Abu Hurairah RA bahwa Rasulullah SAW bersabda: “Siapa yang mendengar satu ayat daripada Kitab Allah Ta’ala (Alquran) ditulis baginya satu kebaikan yang berlipat ganda. Siapa yang membacanya pula, baginya cahanya di hari kiamat.”
            </p>
            <h1>7. Memperoleh Kedudukan yang Tinggi di Surga</h1>
            <p>
              Rasulullah SAW bersabda: “Bacalah (Alquran), naiklah (pada darjat-darjat surga) dan bacalah dengan tartil sebagaimana engkau membacanya dengan tartil di dunia. Sesungguhnya kedudukan drajatmu sehingga kadar akhir ayat yang engkau baca.” (HR Ahmad).
            </p>
            <h1>8. Pahala Seperti Bersedekah</h1>
            
            Rasulullah SAW bersabda: “Orang yang membaca Alquran terang-terangan seperti orang yang bersedekah terang-terangan, orang yang membaca Alquran secara tersembunyi seperti orang yang bersedekah secara sembunyi,” (HR Abu Dawud, Tirmidzi dan Nasa’i,).
            <h1>9. Cahaya yang Menjadi Petunjuk</h1>
            
            Rasulullah SAW bersabda: “Aku wasiatkan kepada kalian agar bertakwa kepada Allah dan Alquran. Sesungguhnya ia adalah cahaya kegelapan, petunjuk di siang hari; maka bacalah dengan sungguh-sungguh.” (HR Baihaqi).
            <h1>10. Menjadi Keluarga Allah SWT</h1>
            
            Rasulullah SAW bersabda: “Sesungguhnya Allah mempunyai keluarga dari kalangan manusia. Beliau ditanya, ’Siapa mereka wahai Rasulullah,’. Beliau menjawab: ’Mereka adalah Ahlul Qur’an, mereka adalah keluarga Allah dan orang-orang khusus-Nya.” (HR Ahmad dan Ibnu Majah).
            <h1>11. Yang Terbata pun Mendapat Pahala</h1>
            
            Rasulullah SAW bersabda: “Orang yang mahir membaca Alquran kelak (mendapat tempat disurga) bersama para utusan yang mulia lagi baik. Sedangkan orang yang membaca Alquran dan masih terbata-bata, dan merasa berat dan susah, maka dia mendapatkan dua pahala.”
            <h1>12. Diberi Balasan Terbaik</h1>
            <p>
            Dari Abu Sa‘id, Rasulullah SAW berkata bahwa Allah SWT berfirman: “Siapa saja yang disibukkan oleh membaca Alquran hingga tak sempat dzikir yang lain kepada-Ku dan meminta kepada-Ku, maka Aku akan memberinya balasan terbaik orang-orang yang meminta. Ingatlah, keutamaan Al-Qur’an atas kalimat-kalimat yang lain seperti keutamaan Allah atas makhluk-Nya.” (HR Baihaqi).
            </p>
            <p>
            Alquran merupakan kitab suci yang memiliki banyak mukjizat. Salah satunya dibuktikan dalam penelitian Jurnal Ushuluddin UIN Suska. Hasilnya, salah satu mukjizat Alquran adalah i’jaz ilmi, yaitu informasi Alquran tentang ilmu pengetahuan dapat dibuktikan sesuai dengan perkembangan ilmu.
            I’jaz ilmi ini kemudian menjadi media dakwah yang efektif, khususnya di kalangan ilmuwan. Banyak kasus ditemukan pengakuan para ilmuwan ketika mereka mampu membuktikan kebenaran yang diinformasikan oleh Alquran.
            Alquran juga merupakan firman Allah SWT yang mulia. Selain karena mememiliki keutamaan membaca Alquran, juga karena mengandung banyak mukjizat. Oleh karena itu, tidak bisa sembarangan membaca. Diharuskan menjalankan adab tertentu saat membaca Alquran.
            Apalagi saat bulan Ramadhan, perihal adab ini harus diperhatikan. Salah satunya karena intensitas berinteraksi dengan Alquran sangat tinggi saat Ramadan. Beberapa adab penting yang perlu diperhatikan saat membaca Alquran adalah:
            </p>
            <h1>1. Ikhlas</h1>
            <p>
              Hendaknya membaca Alquran dengan niat ikhlas mengharapkan ridha Allah SWT dan demi mendapatkan pahala yang melimpah. Dan bukan karena berniat ingin mencari dunia atau atau mendapatkan perhatian juga pujian.
            </p>
            <h1>2. Mulut yang Bersih</h1>
            <p>
              Disunnahkan membaca Alquran dalam keadaan mulut yang bersih. Bau mulut bisa dibersihkan dengan siwak atau bahan lain. Diharapkan, selain mendapatkan pahala dari membacanya, juga tidak mengganggu sekitar dengan bau mulut yang bisa mengganggu.
            </p>
            <h1>3. Dalam Keadaan Suci</h1>
            <p>
              Disunnahkan membaca Alquran dalam keadaan suci. Namun jika sedang berhadas, dibolehkan membacanya berdasarkan kesepatakan para ulama. Sebab, ini berkaitan dengan membaca, namun untuk menyentuh Alquran, salah satu syaratnya harus dalam keadaan suci.
            </p>
            <h1>4. Memilih Tempat yang Bersih</h1>
            <p>
              Para ulama sangat menganjurkan membaca Alquran di masjid. Bukan hanya karena masjid adalah tempat yang bersih dan dimuliakan, tapi juga ketika itu dapat meraih fadhilah i’tikaf. Imam Nawawi rahimahullah menyatakan:
              “Hendaklah setiap orang yang duduk di masjid berniat i’tikaf baik untuk waktu yang lama atau hanya sesaat. Bahkan sudah sepatutnya sejak masuk masjid tersebut sudah berniat untuk i’tikaf. Adab seperti ini sudah sepatutnya diperhatikan dan disebarkan, apalagi pada anak-anak dan orang awam (yang belum paham). Karena mengamalkan seperti itu sudah semakin langka.” (At-Tibyan, hlm. 83).
            </p>
              <h1>5. Menghadap Kiblat</h1>
            <p>
            Setelah mendapatkan tempat yang bersih dan menghadap kiblat, duduk dalam keadaan sakinah dan penuh ketenangan. Ini akan menambah kekhusyukan saat membaca Alquran. diharapkan, seseorang akan mendapatkan pahala saat membacanya.
            </p>
              <h1>6. Memulai dengan Membaca Ta’awudz</h1>
            <p>
              Bacaan ta’awudz menurut mayoritas ulama adalah ‘a’udzu billahi minasy syaithonir rajiim’. Membaca ta’awudz ini sunnah. Allah SWT berfirman: “Apabila kamu membaca Alquran, hendaklah kamu meminta perlindungan kepada Allah dari syaitan yang terkutuk.” (QS An-Nahl: 98).
            </p>
              <h1>7. Khusyu’ dan Tadabbur (Merenungkan) Setiap Ayat</h1>
            <p>
            Perintah untuk mentadabburi Alquran disebutkan dalam Alquran, yakni saat Allah SWT berfirman: “Ini adalah sebuah kitab yang Kami turunkan kepadamu penuh dengan berkah supaya mereka memperhatikan ayat-ayatnya dan supaya mendapat pelajaran orang-orang yang mempunyai pikiran.” (QS Shaad: 29).
            Imam Nawawi Rahimahullah menyatakan: “Hadits yang membicarakan tentang perintah untuk tadabbur banyak sekali. Perkataan ulama salaf pun amat banyak tentang anjuran tersebut.
            Ada cerita bahwa sekelompok ulama teladan (ulama salaf) yang hanya membaca satu ayat yang terus diulang-ulang dan direnungkan di waktu malam hingga datang Shubuh.
            Bahkan ada yang membaca Al-Qur’an karena saking mentadabburinya hingga pingsan. Lebih dari itu, ada di antara ulama yang sampai meninggal dunia ketika mentadabburi Al-Qur’an.” (At-Tibyan, hlm. 86)
            Setelah mengetahui keutamaan membaca Alquran, ada baiknya untuk sering mengerjakannya terutama saat bulan Ramadhan yang pahalanya akan dilipat gandakan.
          </p>
        </section>
        </main>
      </AppLayout>
  )
}