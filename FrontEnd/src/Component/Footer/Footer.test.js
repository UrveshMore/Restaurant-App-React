import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";
test("testing footer", () => {
  render(<Footer />);
  const footerElement = screen.getByText(/Copyright:/i);
  expect(footerElement).toBeInTheDocument;
});
