import styles from "./footer.module.css"

const Footer = () => {
    return (
        <>
            <footer
                id={styles.footer}
                className="d-flex justify-content-center align-items-center"
            >
                <div
                    id={styles.conteudo_footer}
                    className="container d-flex justify-content-between"
                >
                    <img src="/imgs/logoHeader.png" alt="" />

                    <div
                        id={styles.texto_footer}
                        className="d-flex flex-column"
                    >
                        <p>royalgames@email.com</p>
                        <p>(11)99999-9999</p>
                        <p>@RoyalGames</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer