import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchGithubSearch = async (term, type) => {
  const query = type === "orgs" ? `${term}+type:org` : term;
  const { data } = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );
  return data;
};

export default function useGithubSearch(term, type) {
  return useQuery({
    queryKey: ["githubSearch", term, type],
    queryFn: () => fetchGithubSearch(term, type),
    enabled: !!term && !!type,
  });
}
