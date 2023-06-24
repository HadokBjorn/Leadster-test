import Image from "next/image"
import styles from "./Header.module.css" 
import logo from "public/assets/logo.png"
import iconTitle from "public/assets/asset-header.png"
function Header() {
  return (
    <header className={styles.header_container}>
        <div className={styles.image_container}>
            <Image src={logo} alt="Logo"/>
        </div>
        <div className={styles.slogan_container}>
            <p className={styles.slogan_container_p1}>WEBNARS EXCLUSIVOS</p>
            <h2>Menos Conversinha,</h2>
            <h1>
              Mais Conversão
              <Image className={styles.slogan_icon_title} src={iconTitle} alt=""/>
            </h1>
            <div className={styles.slogan_subtitle_container}>
              <p className={styles.slogan_subtitle}>Conheça as estratégias que mudaramm o jogo e como aplicá-las no seu negócio</p>
            </div>
        </div>
    </header>
  )
}

export default Header