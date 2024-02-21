import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to our Next.js App!</h1>
        <p>This is a modern web application built using the Next.js framework.</p>
      </main>

      <Footer />
    </div>
  )
}

export default Home;