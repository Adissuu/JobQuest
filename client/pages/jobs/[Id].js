import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";
import JobDescription from "@/components/Jobs/JobDescription";
import { useRouter } from "next/router";
import styles from "../../styles/Jobs/jobs.module.css";

const Jobs = () => {
    const router = useRouter();
    return (
        <Layout pathname="jobs">
            <h1>JobList with specific job description page</h1>
            <div className={styles.jobcontainer}>
                {/* <JobList /> */}
                <JobDescription id={router.asPath.substring(6)}/>
            </div>
        </Layout>
    )
}

export default Jobs;