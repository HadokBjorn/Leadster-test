import Image from "next/image"
import styles from "./VideoLibrary.module.css"
import thumbnail from "public/assets/thumbnail.png"
function VideoLibrary() {
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
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
            <article>
                <Image src={thumbnail} alt="thumbnail"/>
                <h3> Como aumentar sua Geração de Leads feat. Traktor</h3>
            </article>
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