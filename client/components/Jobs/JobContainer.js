import { listJobs, singleEmployer, singlePost } from "../../actions/post";
import { useState } from "react";
import { useEffect } from "react";
import JobDescription from "./JobDescription";
import JobList from "./JobList";
import { useRouter } from "next/router";
function JobContainer(props) {

  if (!props.showDescription) {
    return (
        <div>
          <JobList jobs={jobs} />
        </div>
      );
    
  }
    const router = useRouter();


    ////LOAD JOBS////////////////////////////////////////////////////
  const [jobs, setJobs] = useState([]);
  const [promiseFulfilled, setPromiseFulfilled] = useState(false);

  const loadJobs = async () => {
    const promise = listJobs()
      .then((result) => {
        setPromiseFulfilled(true);
        setJobs(result);
        console.log(`result from listJobs promise: ${result}`)
      })
      .catch((error) => console.log(error));
    await promise;
  };
  //////////////////////////////////////////////////////////////////////

  ////LOAD EMPLOYER////////////////////////////////////////////////////////
  const [employer, setEmployer] = useState(null);
  const [promiseFulfilled2, setPromiseFulfilled2] = useState(false);

  const loadEmployer = async () => {
    const promise = singleEmployer(router.query.id)
      .then((result) => {
        setPromiseFulfilled2(true);
        setEmployer(result);
        console.log(`result from singleEmployer promise: ${result}`)
      })
      .catch((error) => console.log(error));
    await promise;
  };


  
  /////////////////////////////////////////////////////////////////////////////
  
  ////LOAD JOB//////////////////////////////////////////////////////////////////
  const [job, setJob] = useState(null);
  const [promiseFulfilled3, setPromiseFulfilled3] = useState(false);
    
  
  const loadJob = async () => {
    const promise = singlePost(router.query.id).then((result) => {
      setPromiseFulfilled3(true);
      setJob(result);
      console.log(`result from singleJob promise: ${result}`)
    });
    // .catch((error) => console.log(error));
    await promise;
  };

  

 
  /////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    loadJob();
    loadJobs();
    loadEmployer();
  }, [router.query.id]);

  if (!promiseFulfilled ||!promiseFulfilled2||!promiseFulfilled3  || !job) return <div>Loading</div>;
  
  return (
      <div>
        <JobList jobs={jobs} />
        <JobDescription employer={employer} job={job}/>
      </div>
    );
}
export default JobContainer;
