import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header title="WrittenFor" />
          <p className="description">
            Written<a href="https://writtenfor.netlify.app">For</a>{"\n"}
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className="grid">
            <a href="/posts/first-post" className="card">
              <h3>First Post &rarr;</h3>
              <p>This is the first post!</p>
            </a>

            <a href="/posts/second-post" className="card">
              <h3>Second Post &rarr;</h3>
              <p>This is the second post!</p>
            </a>

            <a href="/posts/third-post" className="card">
              <h3>Third Post &rarr;</h3>
              <p>This is the third post!</p>
            </a>
          </div>
          
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Home