import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'
import styles from '../styles/home.module.scss'
export default function Home() {
  return (
   <>
    <Head>
      <title>Apaixonados por tecnologia - Ponto de Impacto </title>
    </Head> 

    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>Levando você ao próximo nível!</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsa voluptatem sit exercitationem officiis nobis, officia repellendus nostrum nisi veniam nulla dignissimos culpa sint.  </span>

          <a><button>COMEÇAR AGORA!</button></a>
          
        </section>
        <img src="/images/capaBanner.png" alt="" />
      </div>
    <hr className={styles.divisor} />

    <div className={styles.sectionContent}>
        <img src="/images/responsivo3.png" alt="" />
        <section>
          <h2>Configure seus conteúdos de forma responsiva e dinâmica.</h2>
          <span>Tenha um site não só com qualidade responsiva, mas também sem a enorme curva de aprendizagem para colocar um Wordpress para rodar. Nosso modelo dinâmico te permite configurar seus conteúdos sem ficar se preocupando com uma gama de plugns para atualizar diariamente!</span>

        </section>
        
    </div>
    <hr className={styles.divisor} />

    <div className={styles.sectionContent}>
        
        <section>
          <h2>Faça um teste gratuito.</h2>
          <span>Daremos à você um site modelo e um subdominio para você testar. Pode mudar a configaração deixar com a cara do teu negócio e o melhor é que durante esse tempo não precisa cadastrar cartão de crédito, aqui realmente você só paga se gostar! Depois da experiêcia se você contratar o serviço vai ter um exelente site que será seu e + dôminio e hospedagem por 1 ano! </span>

        </section>
        <img src="/images/responsividade.png" alt="" />
    </div> 
    
    <div className={styles.footer}>
        <nav>
          <ul>
            <li><a href="https://api.whatsapp.com/send?phone=5564996035082&text=Quero%20testar%20um%20modelo%20de%20site!%20Pode%20me%20atender?"><img src="./images/whatsapp-logo-4456.png" alt="" /></a></li>
            <li><a href="https://www.linkedin.com/in/paulo-vitor-vaz-6b750b229/"><img src="./images/linkedin-logo-2430.png" alt="" /></a></li>
            <li><a href="mailto:pontodeimpacto790@gmail.com"><img src="./images/gmail-logo-2561.png" alt="" /></a></li>
          </ul>
        </nav>
        <p> PontoDeImpacto &copy; 2023  | Todos os direitos reservados</p>
      </div>
   
    
    
   </main>
   </>
      
  )
}
