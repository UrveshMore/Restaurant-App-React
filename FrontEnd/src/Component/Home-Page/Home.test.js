import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("testing home-page", () => {
  render(<Home />);
  const homeElement = screen.getAllByText(/Hello/i);
  expect(homeElement).toBeInTheDocument;
});
