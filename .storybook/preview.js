import "../src/styles/global.css"; // Ajusta la ruta según la ubicación de tu archivo global.css

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light", // Puedes usar un nombre predefinido o personalizar
      values: [
        { name: "light", value: "#f2f2f2" },
        { name: "dark", value: "#333" }, // Opcional: añadir un fondo oscuro para pruebas
      ],
    },
    // Otros parámetros globales, si es necesario
  },
};

export default preview;
