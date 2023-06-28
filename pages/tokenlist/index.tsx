import Image from 'next/image'

export default function TokenListPage() {
  return(
    <>
      <main className="">
        <div className="">
          <div className="svg-top">
            <Image src="/vector-top.svg" className="vector-top" alt="vector-top" width={542} height={546}></Image>
          </div>
          <div className="gate-illustration">
            <Image src="/gate-illustration-1.svg" alt="gate-illustration" width={260} height={382}></Image>
          </div>
          <div className="title">
            <h2>Welcome to</h2>
            <h1>Mycota Create</h1>
          </div>
          <div className="subtitle">
            <p>{"Start your journey with Mycota Create. Secure, Safe, Easy to use. Let's get started! Join For Free."}</p>
          </div>
          <div className="button">
            <button>Get Started</button>
            <button>Get Started</button>
          </div>
          <div className="svg-bottom">
            <Image src="/vector-bottom.svg" alt="vector-bottom" width={580} height={580}></Image>
          </div>
        </div>
      </main>
    </>
  )
}