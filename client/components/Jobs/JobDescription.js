import { findJob } from "../../public/Jobs/dummy-jobs.js";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import styles from "../../styles/Jobs/jobs.module.css";

function JobDescription(props) {
    const router = useRouter();

    const job = props.job;

    if (!job) return <div>Error message</div>

    return <div className={styles.jobdescription}>
        <Link href={"/jobs/view/"+job._id} className={styles.title}>{job.jobTitle}</Link>
        {/* <div className={styles.company}>{job.company}</div> */}
        <div>{job.description}</div>
        <button className={styles.applybtn}>Apply</button>
    </div>
}

export default JobDescription;