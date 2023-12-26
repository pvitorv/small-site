
import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import thumbImg from '../../../public/images/thumb.png';
export default function Blog() {
    return <>
    <Head >
      <title className={styles.principio}>Blog | Ponto De Impacto</title>
    </Head>
    <h1 className={styles.blog}>Blog | Ponto De Ipacto</h1>
    <main className={styles.container}>
    
      
      <div className={styles.posts}>

        <Link href="/">
          <a>
            <Image src={thumbImg} alt="Post titulo 1" width={720} height={410} quality={100}/>
            <strong>Como usar nossa ferramenta</strong>
            <time>25 DEZEMBRO 2023</time>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto at ipsam sequi, voluptatum fuga ex.</p>
          </a>
        </Link>

      </div>
    </main>
    </>;
  }