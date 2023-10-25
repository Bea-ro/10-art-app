/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import PageTitle from "../ui/PageTitle/PageTitle";

describe("PageTitle", () => {
  it("renders the component", () => {
    render(<PageTitle title="Your Art App" />);
    expect(screen.getByText("Your Art App")).toBeInTheDocument();
  });
});
