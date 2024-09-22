import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Molecules/Header/Header";
import Home from "./pages/Home";
import ComponentsPage from "./pages/ComponentsPage";
import Template from "./pages/Template";

function App() {
  return (
    <>
      <Router>
        <Header
          user={null}
          onLogin={() => console.log("Log in")}
          onLogout={() => console.log("Log out")}
          onCreateAccount={() => console.log("Sign up")}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/components/:id" element={<Template />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
