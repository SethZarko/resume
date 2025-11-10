import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechDetails } from "./TechDetails";

describe("Component: TechDetails", () => {
  it("should render without error and have content", () => {
    const { container } = render(<TechDetails />);

    expect(container.firstChild).toBeInTheDocument();
  });
});