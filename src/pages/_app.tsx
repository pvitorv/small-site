import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from 'next/app';
import '../styles/global.scss';
import { ActiveLink } from '../components/ActiveLink';

import {Header} from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Header/>
            <Component{...pageProps} />
    
    </>
  )
}



