import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from ".";

describe("Component: Image::WovenImageList", () => {
  test("Should render Woven Image List component with blank list", () => {
    render(<Image itemData={[]} />);
    expect(screen.getByTestId("main-cotainer")).toBeInTheDocument();
  });
  test("With 2 item", () => {
    render(
      <Image
        itemData={[
          {
            title: "title",
            img: "img",
          },
          {
            title: "title",
            img: "img",
          },
        ]}
      />
    );
    expect(screen.getByTestId("main-cotainer")).toBeInTheDocument();
    expect(screen.getAllByTestId("item-container").length).toBe(2);
  });
});
