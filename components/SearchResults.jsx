import useGithubSearch from "@/hooks/useSearch";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchResults({ term, type }) {
  const { data, isLoading, isError } = useGithubSearch(term, type);
  const router = useRouter();

  if (isLoading)
    return (
      <div className="flex justify-center item-center h-[100vh]">
        <div className="flex justify-center item-center h-full">
          <img src="../loader.svg" alt="loader" width="90px" />
        </div>
      </div>
    );
  if (isError) return <div>An error occurred. Please try again.</div>;

  if (!data || data.items.length === 0)
    return (
      <div className="mt-16 mx-auto ">
        <p className="text-4 text-center">No results found.</p>
      </div>
    );

  return (
    <div className="p-8 relative">
      <div className="relative">
        <p
          className=" lg:fixed top-2 left-2 bg-blue-500 text-center lg:w-fit text-white px-4 py-2 rounded"
          onClick={() => router.back(-1)}
        >
          Back to Search
        </p>
        <p className="text-center text-3xl  font-bold m-4">All Results</p>
      </div>

      <div className="mb-8 mt-8 mx-auto grid lg:max-w-5xl lg:w-full md:grid-cols-3 lg:mb-0 lg:grid-cols-4 gap-4">
        {data?.items?.map((item) => (
          <div key={item?.id} className="border text-center p-4 rounded">
            <Image
              src={item?.avatar_url}
              alt={item?.login}
              width={64}
              height={64}
              className="rounded-full mx-auto mb-2"
            />
            <h2 className="font-bold">{item?.login}</h2>
            <a
              href={item?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 cursor-pointer "
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
