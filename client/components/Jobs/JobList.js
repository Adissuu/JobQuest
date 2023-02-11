import {myJobs}from "../../public/Jobs/dummy-jobs.js";
import JobItem from "@/components/Jobs/JobItem";
import "../../styles/Jobs/jobs.module.css";

function JobList() {
    let jobs = myJobs();
    return <section className="job-list">
        {jobs.map(job => <JobItem title={job.title} company={job.company} />)}
    </section>
}

export default JobList;