import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Table from "./Table";
import data from "../../data.json";
import userEvent from "@testing-library/user-event";

describe("Table", () => {
  it("should render Table data", () => {
    render(<Table data={data} />);
    expect(screen.getAllByTestId("table-row")).toHaveLength(8);
  });
});
