import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./home.module.css"



const Home = () => {
    return (
        <body>
            <Header></Header>
            <main className={`${styles.main}`}>
                <section className={`${styles.banner}`}>
                    <div className={`container-grid ${styles.conteudo_banner}`}>
                        <div className={styles.texto_banner}>
                            <h1>Conheça nossos jogos!</h1>
                            <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes
                                completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa
                                aqui.</p>
                        </div>
                    </div>
                    <img src="/imgs/Imagem%20Banner.png" alt=""/>
                </section>
            </main>
            <Footer></Footer>
        </body>
    )
}

export default Home