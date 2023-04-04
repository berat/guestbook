import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("should render", () => {
  test("input", () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Adınız");

    expect(input).toBeInTheDocument();
  });
  test("textarea", () => {
    render(<Form />);

    const textarea = screen.getByPlaceholderText("Mesajınız");

    expect(textarea).toBeInTheDocument();
  });
  test("button", () => {
    render(<Form />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});

test("case button dissable props", () => {
  render(<Form />);

  // get elements
  const input = screen.getByPlaceholderText("Adınız");
  const textarea = screen.getByPlaceholderText("Mesajınız");
  const button = screen.getByRole("button");

  expect(button).toBeDisabled();

  userEvent.type(input, "test");
  userEvent.type(textarea, "test");

  expect(button).not.toBeDisabled();
});
