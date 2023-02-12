import { myJobs } from "../../public/Jobs/dummy-jobs.js";
import JobItem from "@/components/Jobs/JobItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";

function JobList() {
  const router = useRouter();

  let jobs = myJobs();

  if (!router.query.id) return <div>Error message</div>

  let content;
  content = jobs.map((job) => (
    <Link  key={job.id} className={styles.jobitem} href={router.query.id}>
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
