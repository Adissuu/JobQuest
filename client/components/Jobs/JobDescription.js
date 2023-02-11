import { findJob } from "../../public/Jobs/dummy-jobs.js";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import styles from "../../styles/Jobs/jobs.module.css";

function JobDescription(props) {
    const router = useRouter();
    const job = findJob(props.id);
    if (!job) return <div>Error message</div>
    let url;
    url="view/"+props.id;
    if (router.asPath.indexOf("view")>-1) url = props.id;
    return <div className={styles.jobdescription}>
        <Link href={url} className={styles.title}>{job.title}</Link>
        <div className={styles.company}>{job.company}</div>
        <div>{job.description}</div>
        <button className={styles.applybtn}>Apply</button>
    </div>
}

export default JobDescription;