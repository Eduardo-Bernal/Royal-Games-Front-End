'use client';

import styles from "./header.module.css";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();

    const redirect = () => {
        router.push('/login');
    };

    return (
        <>
            <header
                id={styles.header}
                className="d-flex flex-row justify-content-between align-items-center"
            >
                <img src="/imgs/logoHeader.png" alt="" />

                <div
                    id={styles.botoes}
                    className="d-flex align-items-center"
                >
                    <a id={styles.links} href="">
                        Catálogo
                    </a>

                    <button
                        onClick={redirect}
                        id={styles.login}
                    >
                        Login
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;