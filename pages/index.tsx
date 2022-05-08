import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Modium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      {/* TODO: Post component
            - [] Create Posts component to display a list of Post
            - [] Create Post component
      */}
    </div>
  )
}

export default Home
