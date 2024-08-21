import React from "react";
import Users from "./components/Users.jsx";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-content">
        <Users />
      </main>
    </div>
  );
}

export default App;
