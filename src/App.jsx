import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Molecules/Header/Header";
import Home from "./pages/Home";
import ComponentsPage from "./pages/ComponentsPage";
import Template from "./pages/Template";
import { NotFound } from "./pages/NotFound";
import TemplateUtilsClass from "./pages/TemplateUtilsClass";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    // Cambia el título basado en la ruta
    const titleMap = {
      "/": "Fluid System",
      "/components": "Components Page",
      "/utils-class/:id": "Utils Class",
    };

    let newTitle = titleMap[location.pathname] || "Not Found";

    // Verifica si la ruta es de tipo /components/:id
    const componentMatch = location.pathname.match(/^\/components\/(.+)/);
    if (componentMatch) {
      newTitle = `Component Details: ${componentMatch[1]}`;
    }

    // Verifica si la ruta es de tipo /utils-class/:id
    const utilsClassMatch = location.pathname.match(/^\/utils-class\/(.+)/);
    if (utilsClassMatch) {
      newTitle = `Utils Class: ${utilsClassMatch[1]}`;
    }

    document.title = newTitle;
  }, [location]);

  return null; // No renderiza nada, solo actualiza el título
};

function App() {
  return (
    <Router>
      <Header
        user={null}
        onLogin={() => console.log("Log in")}
        onLogout={() => console.log("Log out")}
        onCreateAccount={() => console.log("Sign up")}
      />
      <TitleUpdater /> {/* Componente que actualiza el título */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/:id" element={<Template />} />
        <Route path="/utils-class/:id" element={<TemplateUtilsClass />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
