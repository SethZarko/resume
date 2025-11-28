import { motion } from "motion/react";
import { TechDetailsCard } from "./TechDetailsCard/TechDetailsCard";

import styles from "./TechDetails.module.scss";

export interface ITechDetails {
  title: string;
  listItem1: string;
  listItem2: string;
  listItem3: string;
}

const techDetails: ITechDetails[] = [
  {
    title: "Frontend Development",
    listItem1: "Modern React Development",
    listItem2: "Performance Optimizations",
    listItem3: "Responsive & Interactive UIs",
  },
  {
    title: "System Integrations",
    listItem1: "SSG and SSR",
    listItem2: "Headless CMS Connectivity",
    listItem3: "REST and GraphQL API Queries",
  },
  {
    title: "Git & Versioning",
    listItem1: "Git",
    listItem2: "GitHub",
    listItem3: "GitLab",
  },
];

export const TechDetails: React.FC = (): React.ReactNode => {
  return (
    <section id="tech-details">
      <div className={styles.techDetailsContainer}>
        <div className={styles.wrapper}>
          <motion.div 
            className={styles.cardContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {techDetails.map((card: ITechDetails, index: number) => {
              let color: string = "";

              switch (card.title) {
                case "Frontend Development":
                  color = "Frontend Development";
                  break;
                case "System Integrations":
                  color = "System Integrations";
                  break;
                case "Git & Versioning":
                  color = "Git & Versioning";
                  break;
              }

              return (
                <TechDetailsCard key={index} {...card} color={color} />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
