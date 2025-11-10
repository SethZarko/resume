import styles from "./TechDetails.module.scss";
import { TechDetailsCard } from "./TechDetailsCard/TechDetailsCard";

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
          <div className={styles.cardContainer}>
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
          </div>
        </div>
      </div>
    </section>
  );
};
