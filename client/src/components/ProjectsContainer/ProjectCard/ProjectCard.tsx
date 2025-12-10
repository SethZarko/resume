import { motion } from "motion/react";
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
  const title = project?.projectDetails?.title;
  const description = project?.projectDetails?.description;
  const info = project?.projectDetails?.info;
  const link = project?.projectDetails?.link
  const linkName = project?.projectDetails?.linkName

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: -1, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.cardDetails}>
        <ProjectInfo projectInfo={info} />
        {link && <p className={styles.projectLink}>Project Link: <a href={link} target="_blank" rel="noopener noreferrer">{linkName}</a></p>}

        <div className={styles.flowWrapper}>
          <h6>System Architecture</h6>
          <div className={styles.flowContainer}>
            {project.flowChart.map((item: string, index: number) => (
              <FlowChart key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
