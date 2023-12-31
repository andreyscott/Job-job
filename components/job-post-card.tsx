import { JobPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface JobPostCardProps {
  jobPost: JobPost;
}

export default function JobPostCard(props: JobPostCardProps) {
  const {
    jobPost: { company, logo, position, postedAt, location, contract, id },
  } = props;

  return (
    <div className='bg-[#fff] dark:bg-very-dark-blue outline-none rounded-[6px] p-10 mx-4 mt-10 sm:mx-0 sm:w-[339px] md:w-[350px] w-full h-[225px] flex flex-col gap-1 relative'>
      <div
        className={`absolute -top-6 bg-[#000] w-[50px] h-[50px] rounded-[10px] flex items-center justify-center`}
      >
        <Image
          src={logo}
          alt='company name'
          width={30}
          height={30}
          className='w-auto h-auto'
        />
      </div>
      <div className='flex gap-2 text-gray'>
        <span>{postedAt}</span>&#x2022;<span>{contract}</span>
      </div>
      <Link
        className='font-bold text-xl cursor-pointer hover:text-gray transition'
        href={`/jobs/${id}`}
      >
        {position}
      </Link>
      <p className='text-gray'>{company}</p>
      <p className='mt-auto text-violet text-sm font-bold'>{location}</p>
    </div>
  );
}
