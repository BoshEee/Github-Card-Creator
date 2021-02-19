import React from "react";

function UserHeader(props) {
  // avatar_url , html_url, repos_url, name, company, bio, followers
  return (
    <div className="UserHeader">
      <img src={props.avatar_url} />
      <h2 className="username">
        <a href={props.html_url}>{props.name}</a>{" "}
      </h2>
      <section className="userinfo">
        <div className="infobar">
          <p>Followers : {props.followers}</p>
          <p>Company : {props.company}</p> <br />
        </div>

        <div className="bio">
          <p>{props.bio}</p>
        </div>
      </section>
    </div>
  );
}

export default UserHeader;
