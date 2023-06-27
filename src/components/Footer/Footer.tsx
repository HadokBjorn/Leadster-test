import Image from "next/image"
import logo_gif from "public/assets/leadster_logo.gif"
import styles from "./Footer.module.css"
import {FaLinkedinIn, FaFacebookF} from "react-icons/fa"
import {TfiInstagram} from "react-icons/tfi"

function Footer() {
  return (
    <footer className={styles.container}>
        <header>
            <Image src={logo_gif} alt=""/>
            <p>Transformando visitantes em clientes.</p>
        </header>
        <main>
            <div>
                <h2>Links Principais</h2>
                <p>Home</p>
                <p>Contato</p>
                <p>Cases</p>
                <p>Preço</p>
            </div>

            <div>
                <h2>Cases</h2>
                <p>Geraçã de Leads B2B</p>
                <p>Geraração de Leads em software</p>
                <p>Geração de Leads em imobiliária</p>
                <p>Cases de Sucesso</p>
            </div>
            
            <div>
                <h2>Matriais</h2>
                <p>Blog</p>
                <p>Parcerias com Agências</p>
                <p>Guia definitivo do Marketing</p>
                <p>Materiais Gratuitos</p>
            </div>

            <div>
                <h2>Siga a Leadster</h2>

                <article className={styles.icons_container}>
                    <div><FaLinkedinIn color="#9fa5bb"/></div>
                    <div><FaFacebookF color="#9fa5bb"/></div>
                    <div><TfiInstagram color="#9fa5bb"/></div>
                </article>
                
                <p>Email: contato@leadster.com.br</p>
                <p>Telefone: (42) 98828-9851</p>
            </div>

        </main>

        <footer>
            <h3>Copyright © 2015 - 2022 Todos os direitos reservados | <span>Leadster</span></h3>
            <h3>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</h3>
        </footer>
    </footer>
  )
}

export default Footer