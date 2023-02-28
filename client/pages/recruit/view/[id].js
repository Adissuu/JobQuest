import Layout from "@/components/UI/Layout";
import RecruitsDescription from "@/components/Recruits/RecruitsDescription";
import { useRouter } from "next/router";

const Recruits3 = () => {
    const router = useRouter();
    console.log(router.query.recruitid)
    return (
        <Layout pathname="recruit">
            <h1>Some specific recruit's page</h1>
            <RecruitsDescription />
        </Layout>
    )
}

export default Recruits3;