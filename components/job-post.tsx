import { JobPost } from "@/lib/types";

interface JobPostProps {
  jobPost: Pick<
    JobPost,
    | "position"
    | "contract"
    | "postedAt"
    | "location"
    | "description"
    | "requirements"
    | "role"
    | "apply"
    | "company"
  >;
}

export default function JobPost(props: JobPostProps) {
  const {
    jobPost: {
      position,
      contract,
      postedAt,
      location,
      description,
      requirements,
      role,
      company,
      apply,
    },
  } = props;

  return (
    <>
      <div className='flex justify-center mt-40'>
        <div className='flex flex-col w-[80%] bg-[#fff] dark:bg-very-dark-blue rounded-[6px] py-6 px-4'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-2 text-gray'>
                <span>{postedAt}</span>&#x2022;<span>{contract}</span>
              </div>
              <p className='font-bold text-xl'>{position}</p>
              <p className='mt-auto text-violet text-sm font-bold'>
                {location}
              </p>
            </div>
            <button
              type='button'
              className='rounded-[6px] bg-violet dark:bg- h-[48px] sm:w-[147px] mt-10 sm:m-0 text-[#fff] font-semibold flex items-center justify-center gap-2 transition hover:bg-light-violet'
            >
              Apply Now
            </button>
          </div>

          <p className='text-gray my-6'>{description}</p>
          <p className='text-very-dark-blue font-bold text-xl my-4'>
            Requirements
          </p>
          <p className='text-gray my-4'>{requirements.content}</p>
          <ul>
            {requirements.items.map((item, index) => (
              <li className='text-gray my-1' key={index}>
                <span className='mx-6'>&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className='text-very-dark-blue font-bold text-xl my-6'>
            What You Will Do
          </p>
          <p className='text-gray my-4'>{role.content}</p>
          <ul>
            {role.items.map((item, index) => (
              <li className='text-gray my-1' key={index}>
                <span className='mx-6'>&#8226;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='w-full mt-12 sticky bottom-0'>
        <div className='bg-[#fff] dark:bg-very-dark-blue flex items-center sm:justify-between h-[96px] px-10'>
          <div className='sm:block hidden'>
            <p className='font-bold text-xl'>{position}</p>
            <p className='text-gray'>{company}</p>
          </div>
          <button
            type='button'
            className='rounded-[6px] bg-violet h-[48px] sm:w-[141px] w-full sm:m-0 text-[#fff] font-semibold flex items-center justify-center gap-2 transition hover:bg-light-violet'
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}
