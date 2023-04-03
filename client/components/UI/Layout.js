//import Header from "./Header";
import Footer from "./Footer";
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header'), { ssr: false });
const Layout = ({ children, pathname }) => {

    return (
        <>
            <div className="min-h-screen bg-white dark:bg-black-100">
                <Header pathname={pathname} />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout;