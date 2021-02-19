import "./App.css";
import React from "react";
import SideBar from "./components/SideBar";
import Card from "./components/Card";

function App() {
  const [Username, setUsername] = React.useState("");
  return (
    <main>
      <SideBar username={Username} setUsername={setUsername} />
      <Card username={Username} />
    </main>
  );
}

export default App;
