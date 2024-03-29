import { findJob } from "../../public/Jobs/dummy-jobs.js";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import styles from "../../styles/Jobs/jobs.module.css";

function JobDescription(props) {
    const router = useRouter();

    const job = props.job;

    if (!job) return <div>Error message</div>

    let employerContent;
    if (props.employer) employerContent=props.employer/*.CompanyName*/;

    return <div className={styles.jobdescription}>
        <Link href={"/jobs/view/"+job._id} className={styles.title}>{job.jobTitle}</Link>
        <div className={styles.company}>{employerContent}</div>
        <div>{job.description}</div>
        <Link href={"/apply/"+job._id} className={styles.applybtn}>Apply</Link>
    </div>
}

export default JobDescription;