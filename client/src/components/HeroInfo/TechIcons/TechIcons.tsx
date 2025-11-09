import styles from './TechIcons.module.scss'

export interface ITechIconsProps {
    title: string
    color: string
    background: string
}

export const TechIcons: React.FC<ITechIconsProps> = ({ title, color, background }): React.ReactNode => {
  return (
    <div className={styles.icon} style={{ background }}>
        <span style={{ color }}>{title}</span>
    </div>
  )
}
