import React from "react";
import { Header } from "./components/Molecules/Header/Header";
import Home from "./pages/Home";
import SideBar from "./components/Molecules/SideBar/SideBar";

function App() {
  return (
    <>
      <Header
        user={null}
        onLogin={() => console.log("Log in")}
        onLogout={() => console.log("Log out")}
        onCreateAccount={() => console.log("Sign up")}
      />
      <SideBar />
      <Home />
    </>
  );
}

export default App;
