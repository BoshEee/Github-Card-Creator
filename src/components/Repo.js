import React from "react";
const Repo = ({ name, description, html_url }) => {
  return (
    <li>
      <div>
        <a href={html_url}>
          <h4>{name}</h4>
        </a>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Repo;
