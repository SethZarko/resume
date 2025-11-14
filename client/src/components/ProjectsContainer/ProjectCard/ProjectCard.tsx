import type { IProject } from "../ProjectsContainer";

import { ProjectInfo } from "./ProjectInfo/ProjectInfo";
import { FlowChart } from "./FlowChart/FlowChart";

import styles from "./ProjectCard.module.scss";

interface IProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  project,
}): React.ReactNode => {
  const title = project.projectDetails.title;
  const description = project.projectDetails.description;
  const info = project.projectDetails.info;

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.cardDetails}>
        <ProjectInfo projectInfo={info} />

        <div className={styles.flowWrapper}>
          <h6>System Architecture</h6>
          <div className={styles.flowContainer}>
            {project.flowChart.map((item: string, index: number) => (
              <FlowChart key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
