import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";
import userEvent from "@testing-library/user-event";

describe("Nav", () => {
  it("should render welcome in nav", () => {
    render(<Nav />);

    expect(screen.getByRole("heading")).toHaveTextContent("Welcome, Thomas");
  });

  it("should open menu on menu icon click", async () => {
    render(<Nav />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByTestId("menu")).toBeInTheDocument();
  });
});
