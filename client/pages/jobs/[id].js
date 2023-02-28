import Layout from "@/components/UI/Layout";
import JobList from "@/components/Jobs/JobList";
import JobDescription from "@/components/Jobs/JobDescription";
import { useRouter } from "next/router";
import styles from "../../styles/Jobs/jobs.module.css";
import { listJobs, singlePost } from "@/actions/post";
const Jobs2 = (props) => {
    const {jobs, currentJob} = props;

    const router = useRouter();
    
    return (
        <Layout pathname="jobs">
            <h1>JobList with specific job description page</h1>
            <div className={styles.jobcontainer}>
                <JobList jobs={jobs}/>
                <JobDescription job={currentJob}/>
            </div>
        </Layout>
    )
}
export async function getStaticProps(context) {
    const {params} = context;
    const jobId = params.id;

    const allJobs = await listJobs();
    const currentJob = await singlePost(jobId);
    return {
      props: {
        jobs: allJobs,
        currentJob: currentJob,
      },
      revalidate: 10
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
      fallback: 'blocking',
    };
  }

export default Jobs2;
