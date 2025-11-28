import { motion } from "motion/react"; 
import { TechIcons } from "./TechIcons/TechIcons";

import type { ITechIconsProps } from "./TechIcons/TechIcons";

import styles from "./HeroInfo.module.scss";

const techIcons: ITechIconsProps[] = [
  { title: "React", color: "#2fa4f8ff", background: "#1a53af27" },
  { title: "Next.js", color: "#f6f6f6ff", background: "#54545430" },
  { title: "TypeScript", color: "#3178C6", background: "#3179c623" },
  { title: "Node.js", color: "#6cc24a", background: "#6cc24a32" },
  { title: "Express.js", color: "#d4d4d4ff", background: "#3a3a3a30" },
  { title: "Vue", color: "#42b883", background: "#42b8832b" },
  { title: "GraphQL", color: "#E91E63", background: "#e91e6227" },
];

export const HeroInfo: React.FC = (): React.ReactNode => {
  const currentDate = new Date();
  const learnDate = new Date("December 1, 2021");
  const proDate = new Date("August 1, 2025");

  const personalYears = currentDate.getFullYear() - learnDate.getFullYear();

  const professionalMonths = currentDate.getMonth() - proDate.getMonth();

  const professionalYears = currentDate.getFullYear() - proDate.getFullYear();
  
  return (
    <section id="hero">
      <div className={styles.heroContainer}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1>Seth Zarkovich</h1>
          <h2>Front End Developer</h2>
          <h3>
            I build frontend solutions with {personalYears}+ years of personal
            experience and{" "}
            {professionalYears < 1
              ? `${professionalMonths} months`
              : `${professionalYears}+ years`}{" "}
            building scalable applications professionally.
          </h3>
          <p>
            Currently at Contract Front End Developer for{" "}
            <span>CARFAX U.S</span>
          </p>
        </motion.div>

        <motion.div
          className={styles.iconContainer}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {techIcons.map((icons: ITechIconsProps, index: number) => (
            <TechIcons key={index} {...icons} />
          ))}
        </motion.div>
        </div>
    </section>
  );
};
