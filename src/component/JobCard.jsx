import React, { useEffect, useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const JobCard = ({ job, onUnbookmark }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const isSaved = localStorage.getItem(job.slug);
    if (isSaved) setSaved(true);
  }, [job.slug]);

  const handleBookmark = () => {
    const isBookmarked = localStorage.getItem(job.slug);
    if (isBookmarked) {
      localStorage.removeItem(job.slug);
      setSaved(false);
      if (onUnbookmark) onUnbookmark(job.slug);
    } else {
      localStorage.setItem(job.slug, JSON.stringify(job));
      setSaved(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 transition hover:shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-600">{job.company_name}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <button onClick={handleBookmark}>
          {saved ? <BookmarkCheck className="text-blue-600" /> : <Bookmark />}
        </button>
      </div>

      <div className="mt-4 space-y-1 text-sm text-gray-700">
        <p><span className="font-medium">Remote:</span> {job.remote ? 'Yes' : 'No'}</p>
        <p><span className="font-medium">Tag:</span> {job.tags?.[0]}</p>
        <p>
          <a
            href={job.url}
            className="text-blue-500 underline"
            target="_blank"
            rel="noreferrer"
          >
            View Job
          </a>
        </p>
      </div>
    </div>
  );
};


export default JobCard;
