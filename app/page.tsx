import jobListings from "@/data.json";
import { JobList } from '@/components/organisms';

// return the data from the data.json file and pass it to the JobList component as props.
  












export default async function Page() {
  st [filteredJobs, setFilteredJobs] = useState<JobListingT[]>([]);
  const [visibleJobs, setVisibleJobs] = useState<JobListingT[]>([]);

  function getJobListingById(id: number): JobListingT | null {
    return jobListings.find((job) => job.id === id) || null;
  }

  function incrementPage() {
    setPagesVisible((prev) => prev + 1);
  }


  const jobs = jobListings.map((job) => {
    return {
      ...job,
      company: jobListings.companies.find((company) => company.id === job.companyId),
    };
  }
  
  cot companies = jobListings.companies;
  
  const jobs = jobListings.map((job) => {
    return {
      ...job,
      company: jobListings.companies.find((company) => company.id === job.companyId),
    };
  }
  

  

  const jobs = ;
  const companies = ;


 

  if (!jobs || !companies) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <JobList jobs={jobs} companies={companies} />
    </>
  );
}