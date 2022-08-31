import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LF Code</title>
        <meta name="description" content="LF Code LTDA" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

        <main className={styles.container}>
          <Image src="/lfcode.svg" alt="LF Code Logo" width={142} height={131} />
        </main>

    <div className={styles.whatsapp}>
      <a href="https://wa.me/5565981106000?text=Olá Luís, vim do seu site e gostaria de mais informações." target="_blank" rel="noreferrer">
        <Image src="/whatsapp.svg" alt="Fale conosco através do whatsapp" width={60} height={60} />
      </a>
    </div>
    </div>
  )
}