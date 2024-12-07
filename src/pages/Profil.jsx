import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profil = () => {

    const navigate = useNavigate()

  return (
    <>
    <div className="profil-body">
        <div className="profil-sejarah-body">
            <div className="profil-sejarah-top">
                <img src="src\assets\profil\Back.png" onClick={() => navigate('/')}/>
            </div>
            <div className="profil-sejarah-main">
                <h1>Sejarah Masjid Al-Jihad</h1>
                <p>Masjid Al-Jihad Medan adalah masjid yang didirikan pada tahun 1958 di Jalan Abdullah Lubis, Medan, dengan luas 8.677 m² dan dapat menampung hingga 2.000 jamaah. Masjid ini didirikan oleh 17 orang pendiri yayasan yang terdiri dari tokoh masyarakat dan ulama setempat, bertujuan untuk menyediakan tempat ibadah yang representatif di daerah tersebut. Pembangunan masjid ini dilatarbelakangi oleh kebutuhan warga sekitar akan tempat ibadah yang lebih besar, karena populasi umat Islam di Medan terus berkembang pada masa itu. Pada awal pembangunannya, masjid ini dibangun secara bertahap, dan renovasi besar pertama dilakukan pada tahun 1970-an, di mana kubah besar dan menara masjid ditambahkan. Masjid Al-Jihad tak hanya dikenal sebagai pusat ibadah, tetapi juga pusat pergerakan sosial dan keagamaan di Medan. Pada masa Orde Lama, masjid ini kerap menjadi tempat diskusi dan pertemuan antara tokoh agama dan masyarakat yang memperjuangkan kepentingan umat Islam. Bahkan, beberapa kegiatan dakwah dan sosial yang berdampak besar di Medan sering kali dimulai dari sini.</p>
            </div>
        </div>
        <div className="profil-visimisi-body">
            <div className="profil-visimisi-visi">
                <h1>Visi</h1>
                <p>Menjadikan Masjid Al-Jihad sebagai pusat ibadah, pendidikan, dan pemberdayaan umat yang berlandaskan pada nilai-nilai Islam, serta berperan aktif dalam membangun masyarakat yang beriman, bertakwa, dan berakhlak mulia di Medan.</p>
            </div>
            <br />
            <div className="profil-visimisi-misi">
                <h1>Misi</h1>
                <p>Meningkatkan kualitas ibadah dengan menyediakan lingkungan masjid yang nyaman dan kondusif, serta menyelenggarakan shalat berjamaah dan kajian agama secara rutin. Memperkuat pendidikan Islam melalui pengembangan Taman Pendidikan Al-Quran (TPA), kelas tahfidz, dan kajian rutin. Memberdayakan umat dengan melaksanakan kegiatan sosial, seperti pembagian zakat, sedekah, dan pelatihan kewirausahaan, serta mengadakan layanan kesehatan gratis. Mewujudkan persatuan umat dengan memfasilitasi kebersamaan dan ukhuwah Islamiyah, serta menjadi pusat informasi dan dakwah melalui teknologi dan media sosial.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profil