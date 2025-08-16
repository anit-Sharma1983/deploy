import GridViewIcon from '../icons/GridViewIcon';
import ListViewIcon from '../icons/ListViewIcon';
import { ViewMode } from '../../types/enums';
import styles from './ViewToggle.module.css';

const ViewToggle = ({ viewMode, onViewModeChange }) => {
  return (
    <div className={styles.viewToggle}>
      <button
        className={`${styles.toggleButton} ${viewMode === ViewMode.GRID ? styles.active : ''}`}
        onClick={() => onViewModeChange(ViewMode.GRID)}
        title="Grid View"
      >
        <GridViewIcon width={18} height={18} />
      </button>
      <button
        className={`${styles.toggleButton} ${viewMode === ViewMode.LIST ? styles.active : ''}`}
        onClick={() => onViewModeChange(ViewMode.LIST)}
        title="List View"
      >
        <ListViewIcon width={18} height={18} />
      </button>
    </div>
  );
};

export default ViewToggle;