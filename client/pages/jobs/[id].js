import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";
import JobDescription from "@/components/Jobs/JobDescription";
import { useRouter } from "next/router";
import styles from "../../styles/Jobs/jobs.module.css";
import { listJobs, singlePost, listEmployers } from "@/actions/post";
const Jobs2 = (props) => {
  const { jobs, currentJob, employers } = props;

  const router = useRouter();

  return (
    <Layout pathname="jobs">
      <h1>JobList with specific job description page</h1>
      <div className={styles.jobcontainer}>
        <JobList jobs={jobs} employers={employers} />
        <JobDescription
          job={currentJob}
          employer={employers.find(
            (employer) => employer._id === currentJob.employerId
          )}
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
  const allEmployers = await listEmployers();

  return {
    props: {
      jobs: allJobs,
      currentJob: currentJob,
      employers: allEmployers,
    },
    revalidate: 10,
  };
}
// export async function getStaticProps(context) {
//     const { params } = context;

//     const productId = params.pid;

//     const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
//     const jsonData = await fs.readFile(filepath);
//     const data = JSON.parse(jsonData);

//     const product = data.products.find((product) => product.id === productId);

//     return {
//       props: {
//         loadedProduct: product,
//       },
//     };
//   }

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default Jobs2;
