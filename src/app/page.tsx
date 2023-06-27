import VideoLibrary from '@/components/VideoLibrary/VideoLibrary'
import Header from '../components/Header/Header'
import styles from './page.module.css'
import Publicity from '@/components/Publicity/Publicity'
import Footer from '@/components/Footer/Footer'
import VideoCard from '@/components/VideoCard/VideoCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <VideoLibrary/>

      <VideoCard/>

      <Publicity/>
      <Footer/>
    </main>
  )
}
