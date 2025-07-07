'use client';
import FilterPage from '@/components/FilterBar';
import JobCardList from '@/components/jobcard/JobCardList';
import { useState } from 'react';

export type Job = {
  id?: string;
  title: string;
  jobTitle: string;
  experience: string;
  location: string;
  salary: string;
  logo: string;
  badgeText: string;
};


export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleJob = (newjob: Job) => {
    console.log("Adding job:", newjob);
    setJobs((prevJobs) => [...prevJobs, newjob]);
  };

  return (
    <>
      <FilterPage onAddjob={handleJob} />
      <JobCardList jobs={jobs} />
    </>
  );
}
