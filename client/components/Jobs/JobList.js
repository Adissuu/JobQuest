import JobItem from "@/components/Jobs/JobItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";

function JobList(props) {
  console.log(`employers from JobList: ${props.employers}`);
  console.log(`user from JOBLIST: ${props.user}`);

  const router = useRouter();
  const setManageContent = (jobId) => {
    let manageContent;
    if (router.query.user === "recruiter") {
      manageContent = (
        <div className={styles.managebuttons}>
          <Link className={styles.deleteposting} href={`/`}>
            Delete
          </Link>
          <Link className={styles.updateposting} href={`/post?id=${jobId}`}>
            Update
          </Link>
        </div>
      );
    }
    return manageContent;
  };
  let content;
  content = props.jobs.map((job) => (
    <>
      <Link
        key={job._id}
        className={styles.jobitem}
        href={`/jobs/${job._id}${router.query.user ? "?user=recruiter" : ""}`}
      >
        <JobItem
          title={job.jobTitle}
          employer={
            job.employerName /*props.employers.find(employer => employer._id === job.employerId)*/
          }
          onClick={() => handleJobClick(job)}
        />
      </Link>
      {setManageContent(job._id)}
    </>
  ));
  return (
    <section className={`${styles.joblist} ${styles.scrollable}`}>
      {content}
    </section>
  );
}

export default JobList;
