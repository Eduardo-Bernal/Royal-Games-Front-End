import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./home.module.css";

const Home = () => {
    return (
        <>
            <Header />

            <main id={styles.main}>
                <section id={styles.banner} className="d-flex align-items-center justify-content-center position-relative">
                    <div className="container">
                        <div id={styles.conteudo_banner} className="d-flex align-items-center">
                            <div id={styles.texto_banner} className="d-flex flex-column">
                                <h1>Conheça nossos jogos!</h1>

                                <p>
                                    Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes
                                    completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa
                                    aqui.
                                </p>
                            </div>
                        </div>
                    </div>

                    <img src="/imgs/logoHeader.png.png" alt="" />
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;