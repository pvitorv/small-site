
import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png';
export default function Blog() {
    return (
    <>
    <Head>
      <title>Blog | Ponto De Impacto</title>
    </Head>
    <main className={styles.containe}>
      <div className={styles.posts}>
        <Link href="/">
          <a>
            <Image src={thumbImg} alt="Post titulo 1"/>
          </a>
        </Link>
      </div>
    </main>
    </>
    )
  }