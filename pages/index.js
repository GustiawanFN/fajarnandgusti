import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import IconImage from '@components/IconImage'

export default function Home() {
  return (
    <div className="container">
      <Head>
      <meta
          name="keywords"
          content="fajar,fajarnandagusti,fajar nanda gustiawan,nanda,gustiawan,fajar,fnandagustiawan,gustiawanfn"
        />
        <title>hi, I'm fajar!</title>
       
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>

      <main>
      {/* 👋 */}
        <IconImage/>
        <Header title="hi, I'm fajar! " />
        <p className="descriptions">
          part-time android developer,
          <br/>
          full-time super hero.
          {/* Get started by editing <code>pages/index.js</code> */}
        </p>
        <p>  </p>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
