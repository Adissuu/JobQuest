import {myJobs}from "../../public/Jobs/dummy-jobs.js";
import JobItem from "@/components/Jobs/JobItem";
import styles from"../../styles/Jobs/jobs.module.css";

function JobList() {
    let jobs = myJobs();
    return <section className={styles.joblist}>
        {jobs.map(job => <JobItem title={job.title} company={job.company} />)}
    </section>
}

export default JobList;