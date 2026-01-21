import { useEffect, useState } from "react";

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kamwisiyauya/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section>
      <h2>GitHub Projects</h2>
      {repos.map(repo => (
        <div key={repo.id}>
          <h4>{repo.name}</h4>
          <p>{repo.description}</p>
        </div>
      ))}
    </section>
  );
}
