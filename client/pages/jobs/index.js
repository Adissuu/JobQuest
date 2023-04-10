import { listJobs /*, listEmployers*/ } from "@/actions/post";
import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";
import { useRouter } from "next/router";
import { isAuth } from "@/actions/auth";

const Jobs = (props) => {
  
  if (!isAuth())
    return (
      <Layout pathname={router.query.user ? "manage" : "jobs"}>
        <h1>Please log in to view this page</h1>
      </Layout>
    );
    const router = useRouter();
  const { jobs /*employers*/ } = props;
  // console.log(`employers from Jobs page: ${employers}`)

  return (
    <Layout pathname={router.query.user ? "manage" : "jobs"}>
      <h1>{router.query.user ? "" : "Choose your adventure!"}</h1>
      <JobList jobs={jobs} /*employers = {employers}*/ />
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
    revalidate: 10,
  };
}
export default Jobs;
