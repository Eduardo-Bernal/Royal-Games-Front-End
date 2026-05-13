import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./home.module.css";
import Catalogo from "@/components/catalogo/catalogo";

const Home = () => {
    return (
        <>
            <Header />

            <main id={styles.main}>
                <section
                    id={styles.banner}
                    className="d-flex align-items-center position-relative"
                >
                    <div
                        className="container d-flex align-items-center justify-content-between h-100"
                    >
                        <div
                            id={styles.texto_banner}
                            className="d-flex flex-column justify-content-center"
                        >
                            <h1>Conheça nossos jogos!</h1>

                            <p>
                                Navegue por títulos de todas as gerações,
                                descubra plataformas, gêneros e detalhes
                                completos antes de escolher sua próxima aventura.
                                Seu próximo jogo favorito começa aqui.
                            </p>
                        </div>

                        <img
                            id={styles.imagem_banner}
                            src="/imgs/imagemBanner.png"
                            alt=""
                        />
                    </div>
                </section>

                <section
                    id={styles.catalogo}
                    className="d-flex flex-column align-items-center"
                >
                    <h2>Catálogo de jogos</h2>

                    <Catalogo />
                </section>

                <section
                    id={styles.pre_footer}
                    className="d-flex justify-content-center align-items-center"
                >
                    <div
                        id={styles.conteudo}
                        className="container d-flex flex-column align-items-center justify-content-around"
                    >
                        <h2>
                            Jogos online podem afetar o comportamento humano?
                        </h2>

                        <div
                            id={styles.imagem_jogos}
                            className="glass-container d-flex justify-content-around"
                        >
                            <img src="/imgs/lol.png" alt="" />
                            <img src="/imgs/counter_strike.png" alt="" />
                        </div>

                        <p>
                            Estudos indicam que jogos podem alterar o comportamento humano…
                            Principalmente quando o time resolve testar sua paciência
                            em plena partida ranqueada.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;