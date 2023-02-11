import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";

const Jobs = () => {
    return (
        <Layout pathname="jobs">
            <h1>Choose your adventure!</h1>
                <JobList />
        </Layout>
    )
}

export default Jobs;