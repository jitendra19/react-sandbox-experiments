import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import {describe, expect, test} from '@jest'
import Search from "../Search";

describe("Search component", () => {
  test("it renders", () => {
    render(<Search />);
    const linkElement = screen.getByText(/Hello Jiten/i);
    expect(linkElement).toBeInTheDocument();
  });
});
