import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/UI/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Layout>
        <div className='flex items-center justify-evenly'>
          <div className='mx-4 flex flex-col items-center h-full'>
            <div>
              <h1 className='text-6xl font-bold'>JobQuest</h1>
              <p className='ml-36 text-2xl'>Where your adventure begins</p>
            </div>
            <Link href="/signup" className='hover:shadow-xl transition p-4 text-white rounded bg-orange-500 mt-36 font-bold text-2xl'>Start Now</Link>
          </div>
          <div className='pt-8'>
            <Image src='/Landing_Page/hero.svg' width={650} height={650} />
          </div>
        </div>
      </Layout>
    </>
  )
}
