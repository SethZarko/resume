import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectCard } from "./ProjectCard";

import ProjectData from '../../../data/projects/projects.json'

import type { IProject } from "../ProjectsContainer";

const projects: IProject = {
    projectDetails: ProjectData[0].projectDetails,
    flowChart: ['']
}

describe("Component: ProjectCard", () => {
  it("should render without error and have content", () => {
    const { container } = render(<ProjectCard project={projects} />);

    expect(container.firstChild).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      /Headless CMS Migration Project/i
    );
  });
});