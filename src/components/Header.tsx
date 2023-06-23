import Image from "next/image"
import styles from "./Header.module.css" 
import logo from "public/assets/logo.png"
function Header() {
  return (
    <header className={styles.header_container}>
        <div className={styles.image_container}>
            <Image src={logo} alt="Logo"/>
        </div>
        <div className={styles.slogan_container}>
            <p className={styles.slogan_container_p1}>WEBNARS EXCLUSIVOS</p>
            <h2>Menos Conversinha,</h2>
            <h1>Mais Conversão</h1>
            <p>Conheça as estratégias que mudaramm o jogo e como aplicá-las no seu negócio</p>
        </div>
    </header>
  )
}

export default Header