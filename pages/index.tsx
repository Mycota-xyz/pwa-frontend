import Welcome from '@/components/Landing/Login'
import Head from 'next/head'
import Link from 'next/link'
import  TokenList  from '../components/Tokens/TokenList'
import Image from 'next/image'
import ToggleScheme from '../components/ColorScheme/ToggleScheme'
import Login from '../components/Landing/Login'

export default function Home() {
  return (
    <>
      <main className="">
        <div className="">
          <Login/>
        </div>
      </main>
    </>
  )
}
