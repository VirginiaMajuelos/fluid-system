import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "../stories/Atoms/Card/Card";

const cardVariants = [
  {
    size: "small",
    children: "Card tamaño small",
  },
  {
    size: "medium",
    children: "Card tamaño medium",
  },
  {
    size: "large",
    children: "Card tamaño large",
  },
];

describe("Card Component Variants", () => {
  cardVariants.forEach(({ size, children }) => {
    it(`should render a ${size} card`, () => {
      //renderizamos la card con sus props dinámicas
      render(<Card size={size}>{children}</Card>);

      const card = screen.getByText(children);

      //Verifica que el texto se renderiza correctamente
      expect(card).toBeInTheDocument();

      //Verifica que la card tiene las clases correspondientes
      expect(card).toHaveClass(`fs-card--${size}`);

      console.log(card);
    });
  });
});
