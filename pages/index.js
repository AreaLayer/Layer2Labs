import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Layer2Labs</title>
        <meta name="description" content="Creating products and services on the top of Bitcoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Layer2Labs!</a>
        </h1>

        <p className={styles.description}>
          Products{' '}
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
      <a href="https://github.com/Layer2Labs/Jet-USDJJ" className={styles.card}>
            <h2>Stablecoin &rarr;</h2>
            <p>Decentralized stablecoin on Lightning Network</p>
          </a>

          <a href="https://github.com/Layer2Labs/Index" className={styles.card}>
            <h2>Index token &rarr;</h2>
            <p>Product powered by Bitcoin and Ethereum (prices)</p>
          </a>

          <a
            href="https://github.com/Layer2Labs/SecurityTokens"
            className={styles.card}
          >
            <h2>Security Tokens &rarr;</h2>
            <p>Tokens with focus in build new system financial on Bitcoin.</p>
          </a>

          <a
            href="https://github.com/PorticoExchange"
            className={styles.card}
          >
            <h2>Exchange Decentralized &rarr;</h2>
            <p>
              Next generation of DEX on Lightnig Network. </p>
          </a>

          <a
            href="https://github.com/Layer2Labs/P2PBTC"
            className={styles.card}
          >
            <h2>P2P BTC &rarr;</h2>
            <p>
              Next generation of P2P marketplace on Ligtning Network. </p>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
