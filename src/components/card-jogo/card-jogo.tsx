import Btn from "../btn/btn";
import styles from "./card-jogo.module.css";
import { router } from "next/client";

const CardJogo = () => {
    return (
        <>
            <article
                id={styles.conteudo_card}
                className="glass-container d-flex flex-column align-items-center justify-content-between"
            >
                <img src="/imgs/card-cod.png" alt="" />

                <h2>Call of Duty</h2>

                <p>R$ 70,00</p>

                <Btn
                    onclick={() => {
                        router.push("/detalhes-jogo");
                    }}
                >
                    Detalhes
                </Btn>
            </article>
        </>
    );
};

export default CardJogo;