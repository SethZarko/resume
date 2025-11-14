import projects from "../../data/projects/projects.json";

import { ProjectCard } from "./ProjectCard/ProjectCard";

import styles from "./ProjectsContainer.module.scss";

export interface IProjectInfoSection {
  title: string;
  list: string[];
}

export type IInfo =
  | { frontend: IProjectInfoSection }
  | { backend: IProjectInfoSection }
  | { achievements: IProjectInfoSection };

export interface IProjectDetails {
  title: string;
  description: string;
  info: IInfo[];
}

export interface IProject {
  projectDetails: IProjectDetails;
  flowChart: string[];
}

export const ProjectsContainer: React.FC = (): React.ReactNode => {
  return (
    <section id="projects">
      <div className={styles.projectWrapper}>
        <h2>Frontend Projects</h2>

        <div className={styles.projectContainer}>
          {projects.map((project: IProject, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
