import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";
import JobDescription from "@/components/Jobs/JobDescription";
import { useRouter } from "next/router";
import styles from "../../styles/Jobs/jobs.module.css";
import { listJobs, singlePost /*, listEmployers*/ } from "@/actions/post";
import { isAuth } from "@/actions/auth";
const Jobs2 = (props) => {
  const router = useRouter();

  {
    !isAuth() && (
      <Layout pathname={router.query.user ? "manage" : "jobs"}>
        <h1>Please log in to view this page</h1>
      </Layout>
    )
  }
  const { jobs, currentJob /*, employers*/ } = props;



  console.log(`router.quer from JOBDESCRIPTION ${router.query.user}`);
  return (
    <Layout pathname={router.query.user ? "manage" : "jobs"}>
      <div className={styles.jobcontainer}>
        <JobList jobs={jobs} /*employers={employers}*/ />
        <JobDescription
          job={currentJob}
          employer={
            currentJob.employerName /*employers.find(
            (employer) => employer._id === currentJob.employerId
          )*/
          }
        />
      </div>
    </Layout>
  );
};
export async function getStaticProps(context) {
  const { params } = context;
  const jobId = params.id;

  const allJobs = await listJobs();
  const currentJob = await singlePost(jobId);
  // const allEmployers = await listEmployers();

  return {
    props: {
      jobs: allJobs,
      currentJob: currentJob,
      // employers: allEmployers,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default Jobs2;
