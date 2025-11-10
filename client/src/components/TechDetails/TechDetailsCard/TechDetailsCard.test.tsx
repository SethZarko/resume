import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechDetailsCard, type ITechDetailsCardProps } from "./TechDetailsCard";

const card: ITechDetailsCardProps = {
    title: "Frontend Development",
    listItem1: "Modern React Development",
    listItem2: "Performance Optimizations",
    listItem3: "Responsive & Interactive UIs",
    color: "Frontend Development"
}

describe("Component: TechDetailsCard", () => {
  it("should render without error and have content", () => {
    const { container } = render(<TechDetailsCard {...card}  />);

    expect(container.firstChild).toBeInTheDocument();
    const headings = screen.queryAllByRole("heading", { level: 3 })
    
    headings.forEach((heading) => {
        expect(heading).toBeInTheDocument()
    })

    expect(headings[0]).toHaveTextContent(/Frontend Development/i)
  });
});