import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
  <>
    <h1>Home</h1>
    <button>Standard</button>
    <button className='main-button'>Main Button</button>
    <Link href='/profile'>Profile</Link>
  </>
  )
}
