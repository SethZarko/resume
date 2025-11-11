import type { ITechDetails } from "../TechDetails";

import styles from "./TechDetailsCard.module.scss";

export interface ITechDetailsCardProps extends ITechDetails {
  color: string;
}

export const TechDetailsCard: React.FC<ITechDetailsCardProps> = ({
  title,
  listItem1,
  listItem2,
  listItem3,
  color,
}): React.ReactNode => {
  return (
    <div className={styles.card} data-color={color}>
      <h3 data-color={color}>{title}</h3>
      <ul className={styles.list}>
        <li data-color={color}>
          <span>{listItem1}</span>
        </li>
        <li data-color={color}>
          <span>{listItem2}</span>
        </li>
        <li data-color={color}>
          <span>{listItem3}</span>
        </li>
      </ul>
    </div>
  );
};
