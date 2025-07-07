'use client';

import { Box, SimpleGrid, rem } from '@mantine/core';
import JobCard from './JobCard';

type Job = {
  logo: string;
  jobTitle: string;
  experience: string;
  location: string;
  salary: string;
  badgeText: string;
};

const defaultJobs: Job[] = [
  {
    logo: './amazon.png',
    jobTitle: 'Full Stack Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
  {
    logo: './tesla.png',
    jobTitle: 'Node Js Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
  {
    logo: './swiggy.png',
    jobTitle: 'UX/UI Designer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
  {
    logo: './amazon.png',
    jobTitle: 'Full Stack Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
  {
    logo: './tesla.png',
    jobTitle: 'Node Js Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
  {
    logo: './swiggy.png',
    jobTitle: 'UX/UI Designer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
  {
    logo: './amazon.png',
    jobTitle: 'Full Stack Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
  {
    logo: './tesla.png',
    jobTitle: 'Node Js Developer',
    experience: '1-3 yr Exp',
    location: 'Onsite',
    salary: '12LPA',
    badgeText: '24h Ago',
  },
];

export default function JobCardList({ jobs = [] }: { jobs?: Job[] }) {
  const allJobs = [...jobs, ...defaultJobs]; 

  return (
    <Box
      w={rem(1319)}
      mt={rem(25)}
      ml={rem(184)}
    >
      <SimpleGrid cols={4} spacing={rem(16)}>
        {allJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
