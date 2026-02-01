// @ts-ignore
import '../styles/globals.css';

export default function App({ Component, pageProps }: any) {
    // Swapped out MUI/Emotion wrappers for a lightweight Tailwind/global CSS setup.
    return <Component {...pageProps} />;
}
