import { listJobs } from "@/actions/post";
import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";

const Jobs = (props) => {
    const {jobs} = props
  return (
    <Layout pathname="jobs">
      <h1>Choose your adventure!</h1>
      <JobList jobs = {jobs}/>
    </Layout>
  );
};

export async function getStaticProps() {
  const allJobs = await listJobs();
  return {
    props: {
      jobs: allJobs,
    },
    revalidate: 10
  };
}
export default Jobs;
