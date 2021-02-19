import React from "react";
import Footer from "./Footer";
import "../style/sideBar.css";

function SideBar({ Username, setUsername }) {
  const [input, setInput] = React.useState("");
  return (
    <div className="side-bar">
      <section className="Logo">
        <span className="logo-word">Github</span>
        <span>Card Creator</span>
      </section>
      <section className="input-user">
        <label>Enter Github Username : </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={(e) => {
            setUsername(input);
            setInput("");
          }}
        >
          <span>Create Card</span>
        </button>
      </section>
      <section className="about">
        <label>About Me</label>
        <p>
          Thank you for trying my app, this is{" "}
          <a href="https://github.com/BoshEee">BoshEee</a> I'am a Full-Stack
          developer. <br /> I created this app to practice React, the tech used
          to create this app are HTML,CSS & REACT. Feel free to look at the code
          at <a href=""> Github Repo </a> to learn how i made or to give me a
          feedback!{" "}
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default SideBar;
