import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const route = useNavigate();
  return (
    <div>
      Home
      <button onClick={() => route("/Contact")}>Add User </button>
    </div>
  );
}

export default Home;
