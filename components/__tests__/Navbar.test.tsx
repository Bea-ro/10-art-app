/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../ui/Navbar/Navbar";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Navbar", () => {
  it("should navigate to home", () => {
    render(<Navbar />);

    const homeLink = screen.getByText("Home |");
    userEvent.click(homeLink);

    waitFor(() =>
      expect(screen.queryByRole("div")).toHaveAttribute("itemType", "authors")
    );
  });
});
