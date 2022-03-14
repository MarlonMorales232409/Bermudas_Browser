import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'

const Home = () => {
  return (
    
      <div className="h-screen w-screen">
        <Head>
          <title>Bermuda Browser</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePage />
        <Footer />
      </div>
   
  )
}

export default Home
