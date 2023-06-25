import VideoLibrary from '@/components/VideoLibrary/VideoLibrary'
import Header from '../components/Header/Header'
import styles from './page.module.css'
import Publicity from '@/components/Publicity/Publicity'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <VideoLibrary/>
      <Publicity/>
    </main>
  )
}
