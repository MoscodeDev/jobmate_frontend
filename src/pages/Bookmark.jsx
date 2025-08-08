import React, { useEffect, useState } from 'react';
import JobCard from '../component/JobCard'; 

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const savedJobs = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
        const job = JSON.parse(localStorage.getItem(key));
        if (job?.slug && job?.title) {
          savedJobs.push(job);
        }
      } catch (error) {
        console.error(`Invalid JSON in localStorage for key: ${key}`);
      }
    }

    setBookmarkedJobs(savedJobs);
  }, []);

  const handleUnbookmark = (slug) => {
    setBookmarkedJobs((prev) => prev.filter((job) => job.slug !== slug));
  };

  return (
    <div className="p-6 min-h-screen">
      <h1  className="text-2xl text-center font-bold font tracking-widest">Bookmarked Jobs</h1>
      {bookmarkedJobs.length > 0 ? (
        bookmarkedJobs.map((job) => (
          <JobCard key={job.slug} job={job} onUnbookmark={handleUnbookmark} />
        ))
      ) : (
        <p className="text-gray-600">No bookmarked jobs found.</p>
      )}
    </div>
  );
};

export default Bookmarks;

