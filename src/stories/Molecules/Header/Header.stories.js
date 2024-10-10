import { fn } from "@storybook/test";
import { Header } from "@molecules/Header/Header.jsx";

export default {
  title: "Molecules/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
