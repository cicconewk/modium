import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Modium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex items-center justify-between bg-orange-300">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Modium
            </span>{' '}
            is a place to write, read and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <div>
          <img
            className="hidden h-32 md:inline-flex lg:h-full"
            src="https://raw.githubusercontent.com/cicconewk/modium/assets/m-logo-black.webp"
            alt="modium-logo"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
