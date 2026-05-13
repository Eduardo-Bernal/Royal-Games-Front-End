import type { AppProps } from "next/app";
import { Orbitron, Exo_2 } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const orbitron = Orbitron({
    variable: "--font-titulo",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const exo2 = Exo_2({
    variable: "--font-padrao",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${orbitron.variable} ${exo2.variable}`}>
            <Component {...pageProps} />
            <ToastContainer />
        </main>
    );
}