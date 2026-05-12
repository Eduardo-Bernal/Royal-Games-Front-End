import styles from "./header.module.css";
import {useRouter} from "next/router";

const Header = () => {

    const router = useRouter();

    const redirect = () => {
        router.push('/login');
    };


    return (
        <>
            <header id={styles.header}>
                <img src="/imgs/logoHeader.png" alt=""/>
                <div className={styles.botoes}>
                    <a className={styles.links} href="">Catálogo</a>
                    <button onClick={redirect} className={styles.login}>Login</button>
                </div>
            </header>
        </>
    );
}

export default Header;