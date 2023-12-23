import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/point-impact-white (1).png';


import {ActiveLink} from '../ActiveLink';
export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <ActiveLink href='/' activeClassName={styles.active}>
                <a><Image src={logo} alt='Se liga no contexto' priority/></a>
                </ActiveLink>
                <nav>
                   <ActiveLink href='/' activeClassName={styles.active}><a>Home</a></ActiveLink>
                   <ActiveLink href='/about'activeClassName={styles.active}><a>About</a></ActiveLink>
                   <ActiveLink href='/blog'activeClassName={styles.active}><a>Blog</a></ActiveLink> 
                </nav>
                <a className={styles.readyButton} type='button' href="https://qualquercoisa.com.br">Começar</a>
            </div>
        </header>
    )
}