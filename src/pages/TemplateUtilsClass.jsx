import { useSidebar } from "@context/SideBarContext";
import { useParams } from "react-router-dom";
import { SideBar } from "@molecules/SideBar/SideBar";
import { CodeSnippet } from "@molecules/CodeSnippet/CodeSnippet";
import utilsClassData from "@mocks/utilsClassData.json";

export const TemplateUtilsClass = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const { id } = useParams();
  const utilsClass = utilsClassData.find((item) => item.id === id);

  if (!utilsClass) {
    return <div>No se encontró la clase.</div>;
  }

  return (
    <>
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />{" "}
      <section className="fs-template fs-txt--light">
        <h2 className="fs-h2">{utilsClass.title}</h2>
        <p className="fs-txt--body">{utilsClass.description}</p>
        <hr className="fs-divider" />
        {utilsClass.variableOne && (
          <h4 className="fs-h4 fs-p2">{utilsClass.variableOne}</h4>
        )}
        <ul style={{ width: "400px" }}>
          {Array.isArray(utilsClass.items)
            ? utilsClass.items.map((item, index) => (
                <li key={index}>
                  <div>
                    <p className={item.class}>{item.title}</p>
                    <span className="fs-p4">{item.subtitle}</span>
                  </div>
                  <CodeSnippet code={item.variant} />
                  {item.divider ? <hr /> : ""}
                </li>
              ))
            : Object.entries(utilsClass.items).map(([key, variants]) => (
                <div key={key}>
                  <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <ul>
                    {variants.map((variant, index) => (
                      <li key={index}>
                        {variant.variant}
                        <CodeSnippet code={variant.variant} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </ul>
      </section>
    </>
  );
};
