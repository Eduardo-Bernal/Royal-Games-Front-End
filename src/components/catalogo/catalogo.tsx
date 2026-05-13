import styles from "./catalogo.module.css";
import CardJogo from "../card-jogo/card-jogo";
import Btn from "../btn/btn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Catalogo = () => {
    return (
        <>
            <div
                id={styles.conteudo_lista}
                className="container d-flex flex-column justify-content-around"
            >
                <div
                    id={styles.pesquisa}
                    className="d-flex justify-content-center"
                >
                    <input
                        className="glass-container"
                        type="text"
                        placeholder="Pesquise..."
                    />

                    <Btn>Menor Preço</Btn>

                    <select className="glass-container" name="" id="">
                        <option value="">Categoria</option>
                    </select>
                </div>

                <div id={styles.lista_jogos}>
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                    <CardJogo />
                </div>

                <div
                    id={styles.paginas}
                    className="d-flex justify-content-center"
                >
                    <Btn>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Btn>

                    <Btn>1</Btn>
                    <Btn>2</Btn>
                    <Btn>3</Btn>
                    <Btn>4</Btn>
                    <Btn>5</Btn>

                    <Btn>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Btn>
                </div>
            </div>
        </>
    )
}

export default Catalogo