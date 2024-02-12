import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import {describe, expect, test} from '@jest'
import Search from "../Search";
import strings from "../strings";

describe("Search component", () => {
  test("it renders", () => {
    render(<Search />);
    expect(screen.getByText(`${strings.search.title}`)).toBeInTheDocument();
    expect(
      screen.getByText(`@{strings.search.secondTitle}`),
    ).toBeInTheDocument();
  });
});
