import { useState } from "react";

const PostForm = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState('');
  const [description, setDescription] = useState('');
  const [employerId, setEmployerId] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [employerWebsite, setEmployerWebsite] = useState('');


    function sendMessageHandler(event) {
      event.preventDefault();

      fetch('http://localhost:5000/jobPosting/add', {
        method: 'POST',
        body: JSON.stringify({
          jobTitle: jobTitle,
          jobType: jobType,
          location: location
        }),
        headers: {
          'Content-Type':'application/json',
        }
      })
    }

    return (
        <div class="w-full max-w-xl mx-auto component flex items-start py-4">
        <form action="" method="post" onSubmit={sendMessageHandler}>
          <h1 class="text-2xl mb-2">Post new job</h1>
          
          <div class="py-2 mb-5">
        
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-white text-sm mb-2" for="job-title">Title</label>
              <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="job-title" name="job-title" placeholder="Frontend Developer" autofocus value={jobTitle} onChange={(event) => setJobTitle(event.target.value)}/>
            </div>
  
            <div class="mb-4">
              <label class="block text-gray-700 dark:text-white text-sm mb-2" for="apply-link">Link to apply</label>
              <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" id="apply-link" name="apply-link" placeholder="https://jobquest.com/apply"/>
            </div>
  
            <div class="md:flex md:justify-between">
             
              <div class="w-full md:w-3/12 mb-4 md:mb-0">
                  <label class="block text-gray-700 dark:text-white text-sm mb-2" for="job-type">
                    Job Type
                  </label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-4 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job-type" value={jobType} onChange={(event) => setJobType(event.target.value)}>
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Freelance</option>
                      <option>Internship</option>
                    </select>
  
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
              </div>
  
              <div class="w-full md:w-8/12 mb-4 md:mb-0">
                <label for="location" class="block text-gray-700 dark:text-white text-sm mb-2">Location</label>
                <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="location" placeholder="Montréal, QC" value={location} onChange={(event) => setLocation(event.target.value)}/>
  
                <div>
                  <label class="text-gray-600 dark:text-white flex items-center" for="remote">
                    <input class="mr-2 leading-tight" type="checkbox" id="remote" value={remote} onChange={(event) => setRemote(event.target.value)}/>
                    <span class="text-sm">Work can be done remotely</span>
                  </label>
                </div>
              </div>
            </div>
  
          
            <div>
              <label for="description" class="block text-gray-700 dark:text-white text-sm mb-2" value={description} onChange={(event) => setDescription(event.target.value)}>Description</label>
              <textarea name="description" id="description" className="w-full px-4 py-3 bg-white dark:text-black-100 border-gray-400 border rounded" cols="" rows=""></textarea>
            </div>
  
            <div class="flex flex-wrap -mx-3">
             
              <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label for="company" class="block text-gray-700 dark:text-white text-sm mb-2" value={employerName} onChange={(event) => setEmployerName(event.target.value)}>Company</label>
                <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="Company"/>
              </div>
  
             
              <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label for="company" class="block text-gray-700 dark:text-white text-sm mb-2" value={employerWebsite} onChange={(event) => setEmployerWebsite(event.target.value)}>Company Website</label>
                <input type="text" class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="https://jobquest.com"/>
              </div>
            </div>
            <div class="mb-4 md:mb-0">
              <label for="company-logo" class="block text-gray-700 dark:text-white text-sm mb-2">Logo Image</label>
              <input type="file" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="company-logo"/>
            </div>
          </div>
          <div>
            <button class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Create job</button>
          </div>
        </form>
      </div>
    )
}

export default PostForm;