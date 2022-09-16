import React from "react";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { Image } from ".";

describe("Component: Image::CustomImageList", () => {
  test("should render Custom Image List component with blank list", () => {
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
            author:"author",
            featured:true,
          },
          {
            title: "title",
            img: "img",
            author:"author",
            featured:false,
          },
        ]}
      />
    );
    expect(screen.getByTestId("main-cotainer")).toBeInTheDocument();
    expect(screen.getAllByTestId("item-container").length).toBe(2);
  });
});
