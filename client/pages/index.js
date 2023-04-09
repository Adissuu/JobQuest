import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/UI/Layout'

const inter = Inter({ subsets: ['latin'] })
import dynamic from "next/dynamic";

const AuthButton = dynamic(() => import('@/components/Utils/AuthButton'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Layout>
        <div className='items-center flex justify-evenly'>
          <div className='mx-4 flex flex-col items-center h-full z-10'>
            <div>
              <h1 className='text-6xl font-bold'>JobQuest</h1>
              <p className='ml-36 text-2xl'>Where your adventure begins</p>
            </div>
            <AuthButton />
          </div>
          <div className='pt-8 z-10'>
            <Image src='/Landing_Page/hero.svg' width={650} height={650} alt="Jobquest logo" priority />
          </div>
        </div>
      </Layout>
    </>
  )
}

