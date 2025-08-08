import React, { useEffect, useState } from 'react'
import JobCard from '../component/JobCard';
import axios from 'axios';
import { toast } from 'react-toastify';

const Jobs = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get('https://www.arbeitnow.com/api/job-board-api');
        console.log("API response:", res.data);
        if (res.data && res.data.data) {
          setJobs(res.data.data);
        } else {
          toast.error("No jobs found in the response");
        }
      } catch (error) {
        toast.error("Failed to fetch jobs. Please try again later.");
      }
    };

    getJobs();
  }, []);

  return (
    <div>
      <div className="text-2xl text-center font-bold font tracking-widest">JOBS</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      {jobs.map((job) => (
        <JobCard key={job.slug} job={job} />
      ))}
    </div>

    </div>
  );
};

export default Jobs;
