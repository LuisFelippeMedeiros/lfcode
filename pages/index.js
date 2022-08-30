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
      </Head>

      <main className={styles.logo}>
        <Image src="/sem-fundo.png" alt="LF Code Logo" width={142} height={131} />
      </main>

    </div>
  )
}
