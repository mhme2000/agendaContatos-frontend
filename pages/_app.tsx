import { AppProps } from "next/app"
import './App.css';
const MyApp: React.FC<AppProps> = ({ Component, pageProps })  => <Component {...pageProps} />;

export default MyApp;
