import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4">
      <h2 className="text-3xl">GitHub Profile: {data.name}</h2>
      <p className="text-lg mt-2">Followers: {data.followers}</p>
      <img src={data.avatar_url} alt="GitHub Avatar" width={200} className="mx-auto my-4 rounded-full" />

      <h3 className="text-2xl mt-4">Repositories:</h3>
      <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
        {data.repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Github;

// Loader function to fetch GitHub user and repository data
export const githubInfoLoader = async () => {
  const userResponse = await fetch("https://api.github.com/users/Coder-philosopher");
  const userData = await userResponse.json();

  const reposResponse = await fetch("https://api.github.com/users/Coder-philosopher/ReactProjects");
  const reposData = await reposResponse.json();

  return { ...userData, repos: reposData };
};
