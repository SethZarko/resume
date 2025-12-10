import { motion } from "motion/react";
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
  link: string;
  linkName: string;
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
        <motion.h2
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >Frontend Projects</motion.h2>

        <div className={styles.projectContainer}>
          {projects.map((project: IProject, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
