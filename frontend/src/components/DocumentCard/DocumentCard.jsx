import PdfIcon from '../icons/PdfIcon';
import ActionMenu from '../ActionMenu/ActionMenu';
import { formatFileSize, formatDate, formatCategoryDisplay } from '../../utils/formatters';
import { ViewMode } from '../../types/enums';
import styles from './DocumentCard.module.css';

const DocumentCard = ({ 
  document, 
  viewMode, 
  onClick, 
  onEdit, 
  onDownload, 
  onShare, 
  onDelete 
}) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(document);
    }
  };

  if (viewMode === ViewMode.LIST) {
    return (
      <div className={styles.listCard} onClick={handleCardClick}>
        <div className={styles.listThumbnail}>
          {document.thumbnailUrl ? (
            <img 
              src={document.thumbnailUrl} 
              alt={document.name}
              className={styles.thumbnailImage}
            />
          ) : (
            <PdfIcon width={24} height={24} className={styles.fileIcon} />
          )}
        </div>
        <div className={styles.listContent}>
          <div>
            <h3 className={styles.listTitle}>{document.name}</h3>
            <div className={styles.listMetadata}>
              {document.originalName}
            </div>
          </div>
          <div className={styles.listMetadata}>
            <span className={styles.category}>
              {formatCategoryDisplay(document.category)}
            </span>
          </div>
          <div className={styles.listMetadata}>
            {formatFileSize(document.size)}
          </div>
          <div className={styles.listMetadata}>
            {formatDate(document.uploadDate)}
          </div>
          <ActionMenu
            document={document}
            onEdit={onEdit}
            onDownload={onDownload}
            onShare={onShare}
            onDelete={onDelete}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.thumbnail}>
        {document.thumbnailUrl ? (
          <img 
            src={document.thumbnailUrl} 
            alt={document.name}
            className={styles.thumbnailImage}
          />
        ) : (
          <PdfIcon width={48} height={48} className={styles.fileIcon} />
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{document.name}</h3>
          <ActionMenu
            document={document}
            onEdit={onEdit}
            onDownload={onDownload}
            onShare={onShare}
            onDelete={onDelete}
          />
        </div>
        
        <div className={styles.metadata}>
          <div className={styles.metadataRow}>
            <span>Category:</span>
            <span className={styles.category}>
              {formatCategoryDisplay(document.category)}
            </span>
          </div>
          <div className={styles.metadataRow}>
            <span>Size:</span>
            <span>{formatFileSize(document.size)}</span>
          </div>
          <div className={styles.metadataRow}>
            <span>Uploaded:</span>
            <span>{formatDate(document.uploadDate)}</span>
          </div>
          {document.pageCount && (
            <div className={styles.metadataRow}>
              <span>Pages:</span>
              <span>{document.pageCount}</span>
            </div>
          )}
        </div>
        
        {document.tags && document.tags.length > 0 && (
          <div className={styles.tags}>
            {document.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;