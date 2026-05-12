import styles from "./footer.module.css"

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={`container-grid ${styles.conteudo_footer}`}>
                    <img src="/imgs/logoHeader.png" alt=""/>
                    <div className={styles.texto_footer}>
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