import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@context/SideBarContext";
import { Header } from "@molecules/Header/Header.jsx";
import { Home } from "@pages/Home.jsx";
import { ComponentsPage } from "@pages/ComponentsPage.jsx";
import { Template } from "@pages/Template.jsx";
import { TemplateUtilsClass } from "@pages/TemplateUtilsClass.jsx";
import { NotFound } from "@pages/NotFound.jsx";
import "./styles/global.css";

function App() {
  return (
    <SidebarProvider>
      <Router>
        <div className="fs-app--container">
          <Header />
          <div className="fs-app--content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/components/:id" element={<Template />} />
              <Route path="/utils-class/:id" element={<TemplateUtilsClass />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SidebarProvider>
  );
}

export default App;
