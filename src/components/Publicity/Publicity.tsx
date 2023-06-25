import Image from "next/image"
import publicityImage from "public/assets/comparativo_img_CTA.png"
import styles from "./Publicity.module.css"
import stampImage from "public/assets/selo_RD.png"
import ratingImage from "public/assets/rating.webp"
import noCardImage from "public/assets/no-card-dark.webp"

function Publicity() {
  return (
    <section className={styles.container}>
        <div className={styles.left_container}>
            <div className={styles.triangle}></div>
            <Image src={publicityImage} alt=""/>
        </div>
        <div className={styles.right_container}>
            <div className={styles.right_container_content}>

                <h2>
                    Pronto para triplicar sua 
                    <span>Geração de Leads?</span>
                </h2>

                <p className={styles.right_container_question_subtitle}>
                    Criação e ativação em 
                    <span>4 minutos</span>
                </p>

                <div className={styles.button_container}>
                    <button>VER DEMONSTRAÇÃO</button>
                    <Image src={stampImage} alt=""/>
                </div>
                
                <footer>

                    <article className={styles.footer_article_left}>
                        <Image src={noCardImage} alt="icon no-card"/>
                        <p>Não é necessário Cartão de Crédito</p>
                    </article>

                    <article>
                        <Image className={styles.image_stars} src={ratingImage} alt="stars"/>
                        <p>4.9/5 média de satisfação</p>
                    </article>

                </footer>

            </div>
        </div>
    </section>
  )
}

export default Publicity