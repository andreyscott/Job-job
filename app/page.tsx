"use client";

import FilterBar from "@/components/filter-bar";
import JobPosts from "@/components/job-posts";
import { useState } from "react";

export default function Home() {
  const [filteredText, setFilteredText] = useState<string>("");

  return (
    <>
      <FilterBar
        filteredText={filteredText}
        setFilteredText={setFilteredText}
      />
      <JobPosts filteredText={filteredText} setFilteredText={setFilteredText} />
    </>
  );
}
