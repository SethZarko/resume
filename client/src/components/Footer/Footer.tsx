import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from './Footer.module.scss'

export const Footer: React.FC = (): React.ReactNode => {
  return (
    <footer>
        <div className={styles.footerContainer}>
            <a data-testid='link1' href="https://github.com/SethZarko/resume" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a data-testid='link2' href="https://ca.linkedin.com/in/seth-zarkovich" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        </div>
        <div>
            <small className={styles.year}>
                <p>Seth Zarkovich</p><span>{new Date().getFullYear()}&copy;</span>
            </small>
        </div>
    </footer>
  )
}
