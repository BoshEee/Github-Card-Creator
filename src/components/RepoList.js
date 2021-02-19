import React from "react";
import getData from "../utils/GetData";
import Repo from "./Repo";

function RepoList({ url }) {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    getData(url).then((repos) => setRepos(repos));
  }, [url]);
  return (
    <div className="reposHolder">
      <label>Repositories</label>
      <div className="repos">
        <ul>
          {repos.map((repo) => (
            <Repo key={repo.id} {...repo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RepoList;
