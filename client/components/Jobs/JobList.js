import { myJobs } from "../../public/Jobs/dummy-jobs.js";
import JobItem from "@/components/Jobs/JobItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";

function JobList() {
  const router = useRouter();
  console.log(router.asPath == "/jobs");
  let jobs = myJobs();
  let url = "";
  if (router.asPath=="/jobs") {
    url = "/jobs/"
  }
  let content;
  content = jobs.map((job) => (
    <Link  className={styles.jobitem} href={url+job.id}>
      <JobItem title={job.title} company={job.company} />
    </Link>
  ));
  return (
    <section className={`${styles.joblist} ${styles.scrollable}`}>
      {content}
    </section>
  );
}

export default JobList;
