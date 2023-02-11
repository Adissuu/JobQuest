import Layout from "@/components/UI/Layout";
import JobDescription from "@/components/Jobs/JobDescription";
import { useRouter } from "next/router";

const Jobs = () => {
    const router = useRouter();
    console.log(router.asPath.substring(11))
    return (
        <Layout pathname="jobs">
            <h1>Some specific job page</h1>
            <JobDescription id={router.asPath.substring(11)}/>
        </Layout>
    )
}

export default Jobs;