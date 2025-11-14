import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectsContainer } from "./ProjectsContainer";

describe("Component: ProjectsContainer", () => {
  it("should render without error and have content", () => {
    const { container } = render(<ProjectsContainer />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /Frontend Projects/i
    );
  });
});