"use client"
import Image from "next/image"
import styles from "./VideoLibrary.module.css"
import thumbnail from "public/assets/thumbnail.png"
import {videos} from "../../data/mock.json"
import {BsFillPlayFill} from "react-icons/bs"
import { useState } from "react"

interface Props {
    setOpenVideo(value:boolean):void;
    setVideo(value:object):void;
  };
  type IconVideo ={
    id: number,
    selected: boolean
  }
function VideoLibrary(props:Props) {
    const [iconVideo, setIconVideo] = useState<IconVideo>({id: 0, selected: false})
  return (
    <section className={styles.container}>
        <header className={styles.menu_bar_container}>
            <ul className={styles.menu_bar_options_container}>
                <li>Agências</li>
                <li>Chatbot</li>
                <li>Marketing Digital</li>
                <li>Geração de Leads</li>
                <li>Mídia Paga</li>
            </ul>
            <div>
                <p>Ordenar Por</p>
                <select>
                    <option value="">Data de Publicação</option>
                </select>
            </div>
        </header>
        <main className={styles.video_bar_container}>
            {videos.map((video,id)=>(
                <article onMouseOver={()=>setIconVideo({id:id,selected:true})} key={id+1} onClick={()=>{props.setOpenVideo(true);props.setVideo({title:video.title, url:video.url, description: video.description})}}>
                    <div>
                        <Image src={thumbnail} alt="thumbnail"/>
                        {iconVideo.id === id && iconVideo.selected === true?<span className={styles.play_icon}>
                            <BsFillPlayFill size={100} color="#FFF"/>
                        </span>:""}
                    </div>
                    <h3>{video.title}</h3>
                </article>
            ))}
            
        </main>
        <footer className={styles.footer_container}>
            <p>Página</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </footer>
    </section>
  )
}

export default VideoLibrary