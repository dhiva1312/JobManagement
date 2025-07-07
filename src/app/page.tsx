'use client';
import FilterPage from '@/components/FilterBar';
import JobCardList from '@/components/jobcard/JobCardList';

import { useState } from 'react';
import { Button, Container } from '@mantine/core';

export default function HomePage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const handleJob = (newjob:any)=>{
    console.log("Adding job:", newjob);  // ✅ just for check
  setJobs((prevJobs) => [...prevJobs, newjob]); // ✅

  }
  return (
    <>
    <FilterPage onAddjob={handleJob}/>
    <JobCardList jobs={jobs}/>
    
    </>
  );
}
