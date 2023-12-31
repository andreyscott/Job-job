import { jobPostData } from "@/lib/data";

export type JobPost = (typeof jobPostData)[number];
export type Theme = "light" | "dark";
