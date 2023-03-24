import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../Utils/ThemeToggle";
import logo from '../../public/Layout/logo.png'

const Header = ({pathname}) => {
    return (
        <>
            <Head>
                <title>JobQuest</title>
                <meta name="description" content="Giving both employers and employees the chance to find each other" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="nav">
                <Link href='/' className="flex items-center z-10">
                    <Image src={logo} height={50} width={50} alt="logo jobquest"/>
                    <h1 className="mx-2 text-2xl font-semibold hover:text-green-500
                    transition-colors">JobQuest</h1>
                </Link>
                <ol className="flex">
                    <Link href="/jobs" className={`${pathname === "jobs" ? "text-green-500" : ""} mx-2 hover:text-green-500 transition-colors z-10`}>Jobs</Link>
                    <Link href="/freelance" className={`${pathname === "freelance" ? "text-green-500" : ""} mx-2 hover:text-green-500 transition-colors z-10`}>Freelance</Link>
                    <Link href="/internships" className={`${pathname === "internships" ? "text-green-500" : ""} mx-2 hover:text-green-500 transition-colors z-10`}>Internships</Link>
                    <Link href="/recruit" className={`${pathname === "recruit" ? "text-green-500" : ""} mx-2 hover:text-green-500 transition-colors z-10`}>Recruit</Link>
                    <Link href="/post" className={`${pathname === "post" ? "text-green-500" : ""} mx-2 hover:text-green-500 transition-colors z-10`}>New Posting</Link>
                    <Link href="/jobs?user=recruiter" className={`${pathname === "manage" ? "text-green-500" : ""} mx-2 hover:text-green-500 transition-colors z-10`}>Manage Postings</Link>
                </ol>
                <div className="flex items-center">
                    <Link href="/signin" className="mx-2 p-2 border border-green-500 rounded text-green-500
                    hover:text-white hover:bg-green-500 transition-colors z-10">Log In</Link>
                    <Link href="/signup" className="ml-2 mr-4 bg-green-500 rounded p-2 text-white z-10">Sign Up</Link>
                   <ThemeToggle className="mx-2"/>
                </div>
            </header>
        </>
    )
}

export default Header;