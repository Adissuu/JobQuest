import { isAuth } from '@/actions/auth'
import Link from 'next/link'

export default function AuthButton() {
    return (
        <>
            {isAuth() && isAuth().type == "Recruiter" && (
                <Link href="/recruit" className='hover:shadow-xl transition p-4 text-white rounded bg-orange-500 mt-36 font-bold z-10 text-2xl'>Recruit now!</Link>
            )}
            {isAuth() && isAuth().type == "Job Seeker" && (
                <>
                    <Link href="/jobs" className='hover:shadow-xl transition p-4 text-white rounded bg-orange-500 mt-36 font-bold z-10 text-2xl'>Apply now!</Link>
                </>
            )}
            {!isAuth() && (
                <>
                    <Link href="/signup" className='hover:shadow-xl transition p-4 text-white rounded bg-orange-500 mt-36 font-bold z-10 text-2xl'>Start Now</Link>
                </>
            )}
        </>
    )
}