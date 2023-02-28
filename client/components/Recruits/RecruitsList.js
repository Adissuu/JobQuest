import { myRecruits } from "../../public/Recruits/dummy-recruits.js";
import JobItem from "@/components/Jobs/JobItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";

function RecruitsList() {
  const router = useRouter();

  let Recruit = myRecruits();

  let content;
  content = jobs.map((job) => (
    <Link  key={job.id} className={styles.jobitem} href={"/jobs/"+job.id}>
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
