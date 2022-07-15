import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
      <meta
          name="keywords"
          content="fajar,fajarnandagusti,fajar nanda gustiawan,nanda,gustiawan, fajar,fnandagustiawan,gustiawanfn"
        />
        <title>hi, I'm fajar!</title>
       
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
      </Head>

      <main>
        <Header title="
        👋
        hi, I'm fajar! " />
        <p className="description">
          part-time android developer, full-time super hero.
          {/* Get started by editing <code>pages/index.js</code> */}
        </p>
      </main>

      <Footer />
    </div>
  )
}
