import { useState } from "react";

export default function SearchForm({
  onSearch,
  initialTerm = "",
  initialType = "users",
}) {
  const [term, setTerm] = useState(initialTerm);
  const [type, setType] = useState(initialType);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, type);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search GitHub"
        className="border p-2 mr-2"
        required
      />
      <div className="inline-block mr-2">
        <label className="mr-2">
          <input
            type="radio"
            value="users"
            checked={type === "users"}
            onChange={() => setType("users")}
            className="mr-1"
          />
          Users
        </label>
        <label>
          <input
            type="radio"
            value="orgs"
            checked={type === "orgs"}
            onChange={() => setType("orgs")}
            className="mr-1"
          />
          Organizations
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}
