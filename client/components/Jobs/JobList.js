import JobItem from "@/components/Jobs/JobItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";


function JobList(props) {

  let content;
  content = props.jobs.map((job) => (
    <Link  key={job._id} className={styles.jobitem} href={"/jobs/"+job._id}>
      <JobItem title={job.jobTitle} employer={props.employers.find(employer => employer._id === job.employerId)}/>
    </Link>
  ));
  return (
    <section className={`${styles.joblist} ${styles.scrollable}`}>
      {content}
    </section>
  );
}

export default JobList;
