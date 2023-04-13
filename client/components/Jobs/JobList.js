import JobItem from "@/components/Jobs/JobItem";
import styles from "../../styles/Jobs/jobs.module.css";
import { useRouter } from "next/router.js";
import Link from "next/link.js";
import { useState, useEffect } from "react";

function JobList(props) {
  console.log(props.jobs);
  const [requestStatus, setRequestStatus] = useState("");


  const [filteredJobs, setFilteredJobs] = useState(props.jobs);

  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();
  ////FILTER JOBS////////////////////////////////////////////////////

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = props.jobs.filter((posting) => {

      const title = posting.jobTitle.toLowerCase();
      return title.includes(value);
    });

    setFilteredJobs(filtered);
  };

  //////////////////////////////////////////////////////////////////////

  async function deleteHandler(id) {
    console.log(`id from deleteHandler: ${id}`);
    try {
      setRequestStatus("pending");
      await fetch(`http://localhost:8000/api/jobPostings/${id}`, {
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
  // useEffect(() => {
  // }, [requestStatus]);

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
  content = filteredJobs.map((job) => (
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
      {/* <SearchComponent /> */}
      <>
        {/* <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
        /> */}
        <form className="mt-4">
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 mt-4 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white-500 dark:bg-black-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search Jobs..." required
              onChange={handleSearch}
              value={searchTerm} />

          </div>
        </form>
      </>
      {content}
      {router.query.user ? notification.message : ""}
    </section>
  );
}

export default JobList;
