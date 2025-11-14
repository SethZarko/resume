import type { IInfo } from "../../ProjectsContainer";

import styles from './ProjectInfo.module.scss'

interface IProjectInfoProps {
  projectInfo: IInfo[];
}

export const ProjectInfo: React.FC<IProjectInfoProps> = ({
  projectInfo,
}): React.ReactNode => {
  return (
    <div className={styles.infoWrapper}>
      {projectInfo.map((item: IInfo, index: number) => {
        let sectionTitle: string = "";
        let listItems: string[] = [];

        switch (true) {
          case 'frontend' in item:
            sectionTitle = item.frontend.title;
            listItems = item.frontend.list;
            break;
          case 'backend' in item:
            sectionTitle = item.backend.title;
            listItems = item.backend.list;
            break;
          case 'achievements' in item:
            sectionTitle = item.achievements.title;
            listItems = item.achievements.list;
            break;
        }

        return (
          <div key={index} className={styles.infoContainer}>
            <h4 className={styles[sectionTitle.toLowerCase().replaceAll(" ", "")]}>{sectionTitle}</h4>
            <ul>
              {listItems.map((li: string, index: number) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
