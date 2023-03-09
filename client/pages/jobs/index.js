import { listJobs/*, listEmployers*/ } from "@/actions/post";
import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";
import { useRouter } from "next/router";

const Jobs = (props) => {

  const router = useRouter();
    const {jobs, /*employers*/} = props
    // console.log(`employers from Jobs page: ${employers}`)
 
  return (
    <Layout pathname={router.query.user?"manage":"jobs"}>
      <h1>Choose your adventure!</h1>
      <JobList jobs = {jobs} /*employers = {employers}*//>
    </Layout>
  );
};

export async function getStaticProps() {
  const allJobs = await listJobs();
  // const allEmployers = await listEmployers();
  // console.log(allEmployers)
  return {
    props: {
      jobs: allJobs,
      // employers: allEmployers,
    },
    revalidate: 10
  };
}
export default Jobs;
