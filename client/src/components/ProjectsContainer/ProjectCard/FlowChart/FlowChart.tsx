 
import styles from './FlowChart.module.scss'

interface IFlowChartProps {
    item: string
}

 export const FlowChart: React.FC <IFlowChartProps>= ({ item }): React.ReactNode => {
  
   return (
     <div className={styles.chart}>
        <span data-testid="test-list-item">{item}</span>
     </div>
   )
 }
 