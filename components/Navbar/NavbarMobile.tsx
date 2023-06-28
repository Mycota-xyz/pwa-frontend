import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NavbarMobile() {
  const router = useRouter();

  return (
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark navbar-background">
      <div className="container-fluid justify-content-around navbar-content">
        <Link href="/home">
          <a className="nav-link mt-4">
            {router.pathname === '/home' ? (
              <Image src="/icon/home-active.svg" alt="home-page" width={36} height={36}/>
            ) : (
              <Image src="/icon/home.svg" alt="home-page" width={36} height={36}/>
            )}
          </a>
        </Link>
        <Link href="/account">
          <a className={`nav-link ${router.pathname === '/account' ? 'mt-2' : 'mt-4'}`}>
            {router.pathname === '/account' ? (
              <Image src="/icon/wallet-active.svg" alt="wallet-page" width={30} height={47}/>
            ) : (
              <Image src="/icon/wallet.svg" alt="wallet-page" width={30} height={30}/>
            )}
          </a>
        </Link>
        <a 
          href="https://www.mycota.xyz/" 
          className={`nav-link ${router.pathname === '/' ? 'btn-primary' : 'btn-outline-primary'}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="accent-button-wrapper mb-4"/>
        </a>
        <Link href="/assets">
          <a className={`nav-link ${router.pathname === '/assets' ? 'mt-2' : 'mt-4'}`}>
            {router.pathname === '/assets' ? (
              <Image src="/icon/assets-active.svg" alt="assets-page" width={32} height={47}/>
            ): (
              <Image src="/icon/assets.svg" alt="assets-page" width={32} height={32}/>
            )}
          </a>
        </Link>
        <Link href="/create">
          <a className={`nav-link mt-4 ${router.pathname === '/' ? 'btn-primary' : 'btn-outline-primary'}`}>
            <Image src="/icon/create.svg" alt="create-page" width={32} height={32}/>
          </a>
        </Link>
      </div>
    </nav>
  )
}