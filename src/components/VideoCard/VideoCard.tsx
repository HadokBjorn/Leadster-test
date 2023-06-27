import styles from "./VideoCard.module.css"
import {BsCloudDownload} from "react-icons/bs"
import {IoMdClose} from "react-icons/io"

function VideoCard() {
  return (
    <section className={styles.container}>
        <main>
            <header>
                <div>
                    <IoMdClose/>
                </div>
                <h2><span>Webinar:</span> Como aumentar sua Geração de Leads feat. Traktor</h2>
            </header>

            <iframe src="https://www.youtube.com/embed/CtwQuK5pB3Q" allowFullScreen/>

            

            <footer>
                <article>
                    <h3>Descrição</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare aenean.
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