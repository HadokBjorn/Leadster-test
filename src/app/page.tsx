"use client"
import VideoLibrary from '@/components/VideoLibrary/VideoLibrary'
import Header from '../components/Header/Header'
import styles from './page.module.css'
import Publicity from '@/components/Publicity/Publicity'
import Footer from '@/components/Footer/Footer'
import VideoCard from '@/components/VideoCard/VideoCard'
import { useState } from 'react'


export default function Home() {
  const [openVideo, setOpenVideo] = useState<boolean>(false);
  type video = {
    title : string, 
    url : string, 
    description : string
  }
  
  const [video, setVideo] = useState<video>({title:"", url:"", description:""})
  return (
    <main className={styles.main}>
      <Header/>
      <VideoLibrary setOpenVideo={setOpenVideo} setVideo={setVideo}/>

      {openVideo?<VideoCard video={video} setOpenVideo={setOpenVideo}/>:""}

      <Publicity/>
      <Footer/>
    </main>
  )
}
