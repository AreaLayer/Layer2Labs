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
          </a>

         <a
            href="https://github.com/Layer2Labs/ArtByte"
            className={styles.card}
          >
            <h2>Artbyte &rarr;</h2>
           <p>
            Next generation of Marketplace NFT on RSK Network. </p>
          </a>

          <a
            href="https://github.com/Layer2Labs/LightningNameService"
            className={styles.card}
          >
            <h2>Lightning Name Service &rarr;</h2>
           <p>
            Next generation of Lightning Address on Lightning Network. </p>
          </a>

           <a
            href="https://github.com/Layer2Labs/CircleInterface"
            className={styles.card}
          >
            <h2>Circle &rarr;</h2>
           <p>
            Next generation ofPublic repositories on Lightning Network</p>
          </a>

        </div>
      </main>
  )
}
