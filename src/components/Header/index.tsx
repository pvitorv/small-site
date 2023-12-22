import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/point-impact-white (1).png';

import {ActiveLink} from '../ActiveLink';
export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <a><Image src={logo} alt='Se liga no contexto' priority/></a>
                <nav>
                   <a><ActiveLink href={'/'} activeClassName={styles.active}>Home</ActiveLink></a>
                   <a><ActiveLink href={'/about'}activeClassName={styles.active}>About</ActiveLink></a>
                   <a><ActiveLink href={'/blog'}activeClassName={styles.active}>Blog</ActiveLink> </a>
                </nav>
                <a className={styles.readyButton} type='button' href="https://qualquercoisa.com.br">Começar</a>
            </div>
        </header>
    )
}