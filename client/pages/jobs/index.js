import { listJobs /*, listEmployers*/ } from "@/actions/post";
import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";
import { useRouter } from "next/router";
import { isAuth, getCookie } from "@/actions/auth";



const Jobs = (props) => {

  const router = useRouter();
  const token = getCookie('token')
  {
    !isAuth() && (
      <Layout pathname={router.query.user ? "manage" : "jobs"}>
        <h1>Please log in to view this page</h1>
      </Layout>
    )
  }
  const { jobs /*employers*/ } = props;
  // console.log(`employers from Jobs page: ${employers}`)

  return (
    <Layout pathname={router.query.user ? "manage" : "jobs"}>
      <h1>{router.query.user ? "" : ""}</h1>
      <JobList jobs={jobs} /*employers = {employers}*/ />
    </Layout>
  );
};

export async function getStaticProps(token) {
  console.log(`token : ${token}`)
  const allJobs = await listJobs(token);
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
