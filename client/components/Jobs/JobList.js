import JobItem from "@/components/Jobs/JobItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";

function JobList(props) {
  const [requestStatus, setRequestStatus] = useState("");

  const router = useRouter();

  async function deleteHandler(id) {
    console.log(`id from deleteHandler: ${id}`);
    try {
      setRequestStatus("pending");
      await fetch(`http://localhost:5000/jobPosting/${id}`, {
        method: "DELETE",
        // body: JSON.stringify({
        //   jobTitle: jobTitle,
        //   jobType: jobType,
        //   location: location,
        //   remote: remote,
        //   description: description,
        //   employerName: employerName,
        //   employerWebsite: employerWebsite
        // }),
        // headers: {
        //   'Content-Type':'application/json',
        // }
      });
      setRequestStatus("success");
    } catch (err) {
      setRequestStatus("error");
    }
  }
  let notification = { message: "" };
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Job Posting deleted succesfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Something went wrong!",
      message: "Error, Job Posting not deleted.",
    };
  }
  useEffect(() => {
  }, [requestStatus]);

  const setManageContent = (jobId) => {
    let manageContent;
    if (router.query.user === "recruiter") {
      manageContent = (
        <div className={styles.managebuttons}>
          <button
            className={styles.deleteposting}
            onClick={function () {
              deleteHandler(jobId);
            }}
          >
            Delete
          </button>
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
      {router.query.user ? notification.message : ""}
    </section>
  );
}

export default JobList;
