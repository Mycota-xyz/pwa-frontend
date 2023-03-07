import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import  TokenList  from '../components/Tokens/TokenList'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mycota Create</title>
        <meta name="description" content="Mycota Create" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/logo.svg" />
      </Head>
      <main className="">
        <div className="">
          <TokenList/>
        </div>
      </main>
    </>
  )
}
