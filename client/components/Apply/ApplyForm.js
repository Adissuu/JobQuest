import { useState } from "react";
import { useRouter } from "next/router";

const ApplyForm = () => {
  const router = useRouter();

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState("");
  const [description, setDescription] = useState("");
  const [employerId, setEmployerId] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerWebsite, setEmployerWebsite] = useState("");
  const [requestStatus, setRequestStatus] = useState("");

  async function sendMessageHandler(event) {
    event.preventDefault();
    try {
      setRequestStatus("pending");
      await fetch(
        `http://localhost:5000/jobPosting/${
          router.query.id ? `update/${router.query.id}` : "add"
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            jobTitle: jobTitle,
            jobType: jobType,
            location: location,
            remote: remote,
            description: description,
            employerName: employerName,
            employerWebsite: employerWebsite,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      message: "Job Posting added succesfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Something went wrong!",
      message: "Job Posting not added :(",
    };
  }
  return (
    <div class="component mx-auto flex w-full max-w-xl items-start py-4">
      <form action="" method="post" onSubmit={sendMessageHandler}>
        <h1 class="mb-2 text-2xl">
          {router.query.id ? "Apply to job" : "Post new job"}
        </h1>

        <div class="mb-5 py-2">
          <div class="mb-4">
            <label
              class="mb-2 block text-sm text-gray-700 dark:text-white"
              for="job-title"
            >
              Name
            </label>
            <input
              class="mb-3 block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
              id="job-title"
              name="job-title"
              placeholder=""
              autofocus
              required
              value={jobTitle}
              onChange={(event) => setJobTitle(event.target.value)}
            />
          </div>

          <div class="mb-4">
            <label
              class="mb-2 block text-sm text-gray-700 dark:text-white"
              for="apply-link"
            >
              Email Address
            </label>
            <input
              class="mb-3 block w-full appearance-none rounded border border-gray-400 bg-white py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
              type="email"
              id="apply-link"
              name="apply-link"
              placeholder=""
            />
          </div>

          <div>
            <label
              class="mb-2 block text-sm text-gray-700 dark:text-white"
              for="apply-link"
            >
              Resume
            </label>
            <input type="file" />
          </div>
            <br />
          <div>
            <label
              class="mb-2 block text-sm text-gray-700 dark:text-white"
              for="apply-link"
            >
              Are you able to legally work in Canada?
            </label>
            <input type="checkbox" />
          </div>

          <br />
          <div>
            <button
              class="rounded bg-teal-500 py-2 px-3 text-white hover:bg-teal-600"
              type="submit"
            >
              {router.query.id ? "Apply" : "Create job"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;