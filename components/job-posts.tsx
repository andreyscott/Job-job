import JobPostCard from "@/components/job-post-card";
import { jobPostData } from "@/lib/data";
import { SetStateAction } from "react";

interface JobPostsProps {
  filteredText: string;
  setFilteredText: (value: SetStateAction<string>) => void;
}

export default function JobPosts(props: JobPostsProps) {
  const { filteredText, setFilteredText } = props;

  const filteredData = jobPostData.filter((jobPost) =>
    jobPost.description.includes(filteredText)
  );

  return (
    <div className='flex flex-wrap justify-center gap-4 mt-20'>
      {filteredData.length === 0 ? (
        <div>Hmm no results found. </div>
      ) : (
        filteredData.map((jobPost) => (
          <JobPostCard jobPost={jobPost} key={jobPost.id} />
        ))
      )}
    </div>
  );
}
