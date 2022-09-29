import React from "react";
import { render, screen } from "@testing-library/react";
import { Image } from ".";

describe("Component: Image::TitleBarBelowImageList", () => {
  test("should render Title Bar Below Image List component with blank list", () => {
    render(<Image itemData={[]} />);
    expect(screen.getByTestId("main-cotainer")).toBeInTheDocument();
  });
  test("With 2 item", () => {
    render(
      <Image
        itemData={[
          {
            img: "img",
            title: "title",
            author:"author",
          },
          {
            img: "img",
            title: "title",
            author:"author",
          },
        ]}
      />
    );
    expect(screen.getByTestId("main-cotainer")).toBeInTheDocument();
    expect(screen.getAllByTestId("item-container").length).toBe(2);
  });
});
