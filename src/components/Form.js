import React from "react";
import Home from "./Home";

function Form() {
  //const [username, setUserName] = React.useState("");

  const [input, setInput] = React.useState("");
  function inputBtn(event) {
    event.preventDefault();
    console.log("clicked");
    setInput(input);
    console.log(" input " + input);
  }
  return (
    <form className="search">
      <label htmlFor="search"> Type Your Github Username </label>
      <input
        type="text"
        placeholder="type here ..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={inputBtn}>Click</button>
    </form>
  );
}

export default Form;
