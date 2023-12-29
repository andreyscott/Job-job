"use client";

import React from "react";
import jobListings from "@/data.json";
import { JobList } from '@/components/organisms';
import { Company, Job } from '@/models/contetful';

export default function Page() {
  
  const getJobs = async () => {
    const jobs = jobListings.map((job: { id: number; company: string; logo: string; logoBackground: string; position: string; postedAt: string; contract: string; location: string; website: string; apply: string; 
      description: string; requirements:
      { content: string; }; role: { content: string; }; }) => {
      return {
        id: job.id,
        company: job.company,
        logo: job.logo,
        logoBackground: job.logoBackground,
        position: job.position,
        postedAt: job.postedAt,
        contract: job.contract,
        location: job.location,
        website: job.website,
        apply: job.apply,
        description: job.description,
        requirements: job.requirements,
        role: job.role,
      };
 });    
    return jobs;
  }

  const getCompanies = async () => {
    const companies = jobListings.map((job: { id: number; company: string; logo: string; logoBackground: string; position: string; postedAt: string; contract: string; location: string; website: string; apply: string; 
      description: string; requirements:
      { content: string; }; role: { content: string; }; }) => {
      return {
        id: job.id,
        company: job.company,
        logo: job.logo,
        logoBackground: job.logoBackground,
        position: job.position,
        postedAt: job.postedAt,
        contract: job.contract,
        location: job.location,
        website: job.website,
        apply: job.apply,
        description: job.description,
        requirements: job.requirements,
        role: job.role,
      };
    });


    return companies;
  }


  
   const jobsResponse: unknown =  getJobs();
  const companiesResponse: unknown = getCompanies();

  const getJobType = (jobs: Job[]) => {
    return jobs;
  };

  const getCompanyType = (company: Company[]) => {
    return company;
  };

  const jobs = getJobType(jobsResponse as Job[]);
  const companies = getCompanyType(companiesResponse as Company[]);

  if (!jobs || !companies) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <h1>Job Listings</h1>
      <JobList jobs={jobs} companies={companies} />
    </>
  );
}