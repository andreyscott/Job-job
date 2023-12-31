import { JobPost } from "@/lib/types";
import Image from "next/image";

interface CompanyInfoCardProps {
  companyInfo: Pick<JobPost, "company" | "logoBackground" | "website" | "logo">;
}

export default function CompanyInfoCard(props: CompanyInfoCardProps) {
  const {
    companyInfo: { company, logoBackground, website, logo },
  } = props;

  return (
    <div className='flex justify-center relative'>
      <div className='flex flex-col justify-center items-center sm:flex-row sm:items-center w-[80%] bg-[#fff] dark:bg-very-dark-blue rounded-[6px] sm:h-[140px] h-[205px] absolute -top-8'>
        <div className='sm:h-[140px] h-[50px] sm:w-[140px] w-[50px] rounded-[10px] sm:rounded-l-[6px] sm:rounded-r-none bg-[#000] flex justify-center items-center p-1 absolute sm:static -top-6'>
          <Image
            src={logo}
            width={50}
            height={50}
            quality={95}
            alt={`${company} logo`}
          />
        </div>
        <div className='flex flex-col items-center text-center sm:flex-row sm:justify-between w-full mx-6 gap-4'>
          <div className='flex flex-col sm:items-start gap-2'>
            <p className='text-very-dark-blue dark:text-[#fff] text-2xl font-bold'>
              {company}
            </p>
            <a className='text-gray' href={website}>
              {website}
            </a>
          </div>
          <button
            type='button'
            className='rounded-[6px] bg-violet/20 dark:bg-[#fff]/10 h-[48px] w-[147px] text-[#fff] font-semibold flex items-center justify-center gap-2 transition hover:bg-violet/35 hover:text-violet dark:hover:bg-[#fff]/35 dark:hover:text-[#fff]'
          >
            Company Site
          </button>
        </div>
      </div>
    </div>
  );
}
