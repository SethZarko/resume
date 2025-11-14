import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectInfo } from "./ProjectInfo";

import type { IInfo } from "../../ProjectsContainer";

const projectInfoItem: IInfo = {
  frontend: { title: "Frontend", list: [""] },
  backend: { title: "Backend", list: [""] },
  achievements: { title: "Achievements", list: [""] },
};

describe("Component: ProjectInfo", () => {
  it("should render without error and have content", () => {
    const { container } = render(
      <ProjectInfo projectInfo={[projectInfoItem]} />
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the "Frontend" header correctly', () => {
    const mockProps: IInfo[] = [
      {
        frontend: {
          title: "Frontend",
          list: ["React", "TypeScript"],
        },
      },
    ];

    render(<ProjectInfo projectInfo={mockProps} />);

    const frontendHeader = screen.getByRole("heading", {
      name: /frontend/i,
      level: 4,
    });

    expect(frontendHeader).toBeInTheDocument();
    expect(frontendHeader).toHaveTextContent("Frontend");
  });

  it('renders the "Backend" header correctly', () => {
    const mockProps: IInfo[] = [
      {
        backend: {
          title: "Backend",
          list: ["React", "TypeScript"],
        },
      },
    ];

    render(<ProjectInfo projectInfo={mockProps} />);

    const backendHeader = screen.getByRole("heading", {
      name: /backend/i,
      level: 4,
    });

    expect(backendHeader).toBeInTheDocument();
    expect(backendHeader).toHaveTextContent("Backend");
  });

  it('renders the "Achievement" header correctly', () => {
    const mockProps: IInfo[] = [
      {
        achievements: {
          title: "Achievements",
          list: ["React", "TypeScript"],
        },
      },
    ];

    render(<ProjectInfo projectInfo={mockProps} />);

    const achievementHeader = screen.getByRole("heading", {
      name: /achievements/i,
      level: 4,
    });

    expect(achievementHeader).toBeInTheDocument();
    expect(achievementHeader).toHaveTextContent("Achievement");
  });
});
