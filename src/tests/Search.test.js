import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
// import {describe, expect, test} from '@jest'
import Search from "../Search";
import strings from "../strings";

jest.mock("axios");

describe("Search component", () => {
  // axios.get.mockResolvedValue({ data: { data: [] } });

  test("it renders", () => {
    // render(<Search />);
    // await act( async () => render(<Search />));
    axios.get.mockResolvedValue({
      data: {
        data: [
          {
            iso2: "AF",
            iso3: "AFG",
            country: "Afghanistan",
            cities: [
              "Herat",
              "Kabul",
              "Kandahar",
              "Molah",
              "Rana",
              "Shar",
              "Sharif",
              "Wazir Akbar Khan",
            ],
          },
          {
            iso2: "IN",
            iso3: "IND",
            country: "India",
            cities: ["Abdul", "Adilabad", "Adwani", "Agartala"],
          },
        ],
      },
    });
    act(() => render(<Search />));

    expect(screen.getByText(`${strings.search.title}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${strings.search.secondTitle}`),
    ).toBeInTheDocument();
    // expect(screen.getByText("India")).toBeInTheDocument();
  });
});
