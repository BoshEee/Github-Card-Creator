import React from "react";
import UserHeader from "./UserHeader";
import getData from "../utils/GetData";
import RepoList from "./RepoList";
import "../style/Card.css";

function Card({ username }) {
  const [userData, setUserData] = React.useState(username);
  console.log("car : " + username);
  React.useEffect(() => {
    getData(`https://api.github.com/users/${username}`).then((data) => {
      console.log("fetched");
      setUserData(data);
    });
  }, [username]);
  if (!userData) {
    return (
      <div className="Loading">
        <div className="spinner"></div>
      </div>
    );
  }
  const {
    avatar_url,
    html_url,
    name,
    followers,
    company,
    blog,
    bio,
    repos_url,
  } = userData;
  return (
    <div className="card-container">
      <UserHeader
        avatar_url={avatar_url}
        name={name}
        html_url={html_url}
        company={company}
        blog={blog}
        followers={followers}
        bio={bio}
      />
      {repos_url ? <RepoList url={repos_url} /> : null}
    </div>
  );
}

export default Card;
