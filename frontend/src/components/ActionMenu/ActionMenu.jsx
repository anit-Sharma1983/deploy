import { useState, useRef, useEffect } from 'react';
import MenuIcon from '../icons/MenuIcon';
import EditIcon from '../icons/EditIcon';
import DownloadIcon from '../icons/DownloadIcon';
import ShareIcon from '../icons/ShareIcon';
import DeleteIcon from '../icons/DeleteIcon';
import styles from './ActionMenu.module.css';

const ActionMenu = ({ document, onEdit, onDownload, onShare, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (action) => {
    action();
    setIsOpen(false);
  };

  return (
    <div className={styles.menuContainer} ref={menuRef}>
      <button
        className={styles.menuButton}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <MenuIcon width={16} height={16} />
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          <button
            className={styles.menuItem}
            onClick={(e) => {
              e.stopPropagation();
              handleAction(() => onEdit(document));
            }}
          >
            <EditIcon width={16} height={16} />
            Edit Metadata
          </button>
          <button
            className={styles.menuItem}
            onClick={(e) => {
              e.stopPropagation();
              handleAction(() => onDownload(document));
            }}
          >
            <DownloadIcon width={16} height={16} />
            Download
          </button>
          <button
            className={styles.menuItem}
            onClick={(e) => {
              e.stopPropagation();
              handleAction(() => onShare(document));
            }}
          >
            <ShareIcon width={16} height={16} />
            Share
          </button>
          <button
            className={`${styles.menuItem} ${styles.danger}`}
            onClick={(e) => {
              e.stopPropagation();
              handleAction(() => onDelete(document));
            }}
          >
            <DeleteIcon width={16} height={16} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;