import Layout from "@/components/UI/Layout";
import JobDescription from "@/components/Jobs/JobDescription";
import { useRouter } from "next/router";

const Jobs3 = () => {
    const router = useRouter();
    console.log(router.query.jobId)
    return (
        <Layout pathname="jobs">
            <h1>Some specific job page</h1>
            <JobDescription />
        </Layout>
    )
}

export default Jobs3;