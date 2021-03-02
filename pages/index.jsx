import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>OnlyDesk | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto px-10 py-10">
          <h1 className="text-4xl text-gray-700 font-bold tracking-wider">OnlyDesk Client 🌝</h1>
        </div>
      </main>

    </div>
  )
}

export default Home
