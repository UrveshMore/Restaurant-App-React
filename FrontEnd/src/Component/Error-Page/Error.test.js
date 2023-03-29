import { render, screen } from "@testing-library/react";
import Error from "./Error";


test("test error page", () => {
  render(<Error></Error>);
  const errorElement = screen.getByText(/No Page Found...!/i);
  expect(errorElement).toBeInTheDocument;
});
