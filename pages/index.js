import Head from 'next/head'
import Script from 'next/script'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <style jsx>
        {
          `
            
          `
        }
      </style>
      <Head>
        <title>welcome to next js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src='sc.js' strategy='lazyOnload'>

      </Script>
      

      <main className={styles.main}>
        <h1 className='myspan'>Hunting coder</h1>

        <img className={styles.myimg} src='/photo.avif' alt='' width={'237'} height={'158'} />
        

        <p>let's write blog</p>
        <div className={styles.blogs}>
          <div className='blogItem'>
            <h3>How to learn nextjs ?</h3>
            <p>Javascript is language is used to design logic for the web</p>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className='blogItem'>
            <h3>How to learn nextjs ?</h3>
            <p>Javascript is language is used to design logic for the web</p>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className='blogItem'>
            <h3>How to learn nextjs ?</h3>
            <p>Javascript is language is used to design logic for the web</p>
          </div>
        </div>
      </main>

    </>
  )
}
