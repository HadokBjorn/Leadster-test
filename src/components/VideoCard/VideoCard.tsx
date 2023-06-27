import styles from "./VideoCard.module.css"
import {BsCloudDownload} from "react-icons/bs"
import {IoMdClose} from "react-icons/io"

interface Props {
    setOpenVideo(value:boolean):void;
    video : video;
  };

type video = {
    title : string, 
    url : string, 
    description : string
}
  
function VideoCard(props:Props) {
const {setOpenVideo, video} = props
  return (
    <section className={styles.container}>
        <main>
            <header>
                <div>
                    <IoMdClose onClick={()=>{setOpenVideo(false)}}/>
                </div>
                <h2><span>Webinar:</span> {video.title}</h2>
            </header>

            <iframe src={video.url} allowFullScreen/>

            

            <footer>
                <article>
                    <h3>Descrição</h3>
                    <p>
                        {video.description}
                    </p>
                </article>
                <article>
                    <h3>Downloads</h3>
                    <ul className={styles.download_icons_container}>
                        <li className={styles.icon_one}>
                            <a href="#"><BsCloudDownload/></a>
                            <p>Spreadsheet.xls</p>
                        </li>
                        <li className={styles.icon_two}>
                            <a href="#"><BsCloudDownload/></a>
                            <p>Document.doc</p>
                        </li>
                        <li className={styles.icon_three}>
                            <a href="#"><BsCloudDownload/></a>
                            <p>Presentation.ppt</p>
                        </li>
                    </ul>
                </article>   
            
            </footer>

        </main>
    </section>
  )
}

export default VideoCard