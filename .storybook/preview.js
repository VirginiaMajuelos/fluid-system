import "../src/styles/global.css";
import "../src/styles/variables.css";
import "../src/styles/reset.css";

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
      default: "light", 
      values: [
        { name: "light", value: "#f2f2f2" },
        { name: "dark", value: "#333" },
      ],
    },

    fontSize: {
      default: "font-family",
      value: "Quicksand",
    },
  },
};

export default preview;
