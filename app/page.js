"use client";
import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSearch = (term, type) => {
    router.push(`/search/${term}?type=${type}`);
  };
  return (
    <main className="container mx-auto p-4 ">
      <div className="flex items-center  flex-col h-screen">
        <h1 className="text-3xl  font-bold mb-4">GitHub Search</h1>
        <SearchForm onSearch={handleSearch} />
      </div>
    </main>
  );
}
