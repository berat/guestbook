import {
  fireEvent,
  render,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react";
import React from "react";
import Card from "./Card";

afterEach(cleanup);

const dummyComments = [
  { id: 1, name: "Berat", comment: "test1" },
  { id: 2, name: "Hadi", comment: "test2" },
];

describe("should render", () => {
  test("name is render", () => {
    render(<Card comments={dummyComments} />);

    const nameElement = screen.getByText("Berat");

    expect(nameElement).toBeInTheDocument();
  });
  test("comment is render", () => {
    render(<Card comments={dummyComments} />);

    const commentElement = screen.getByText("test1");

    expect(commentElement).toBeInTheDocument();
  });
});

describe("click remove button", () => {
  test("its render", () => {
    const Wrapper = () => {
      const [comments, setComments] = React.useState(dummyComments);
      return <Card comments={comments} setComments={setComments} />;
    };
    render(<Wrapper />);

    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      fireEvent.click(button);
    });

    waitFor(() =>
      expect(screen.getAllByText("Hadi bir yorum gönder")[0]).toBeInDocument()
    );
  });
});
