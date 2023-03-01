import { listJobs, listEmployers } from "@/actions/post";
import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";

const Jobs = (props) => {
    const {jobs, employers} = props
  return (
    <Layout pathname="jobs">
      <h1>Choose your adventure!</h1>
      <JobList jobs = {jobs} employers = {employers}/>
    </Layout>
  );
};


export async function getStaticProps() {
  const allJobs = await listJobs();
  const allEmployers = await listEmployers();
  return {
    props: {
      jobs: allJobs,
      employers: allEmployers,
    },
    revalidate: 10
  };
}
export default Jobs;
