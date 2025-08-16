import { useState } from 'react';
import CloseIcon from '../icons/CloseIcon';
import ZoomInIcon from '../icons/ZoomInIcon';
import ZoomOutIcon from '../icons/ZoomOutIcon';
import DownloadIcon from '../icons/DownloadIcon';
import styles from './DocumentViewer.module.css';

const DocumentViewer = ({ document, onClose }) => {
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = document.url;
    link.download = document.name;
    link.click();
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, document.pageCount || 1));
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.viewer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>{document.name}</h2>
          </div>
          <div className={styles.controls}>
            <button 
              className={styles.controlButton}
              onClick={handleZoomOut}
              title="Zoom Out"
            >
              <ZoomOutIcon width={20} height={20} />
            </button>
            <span className={styles.zoomLevel}>{zoom}%</span>
            <button 
              className={styles.controlButton}
              onClick={handleZoomIn}
              title="Zoom In"
            >
              <ZoomInIcon width={20} height={20} />
            </button>
            <div className={styles.divider} />
            {document.pageCount > 1 && (
              <>
                <button 
                  className={styles.controlButton}
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  title="Previous Page"
                >
                  ←
                </button>
                <span className={styles.pageInfo}>
                  {currentPage} / {document.pageCount}
                </span>
                <button 
                  className={styles.controlButton}
                  onClick={handleNextPage}
                  disabled={currentPage === document.pageCount}
                  title="Next Page"
                >
                  →
                </button>
                <div className={styles.divider} />
              </>
            )}
            <button 
              className={styles.controlButton}
              onClick={handleDownload}
              title="Download"
            >
              <DownloadIcon width={20} height={20} />
            </button>
            <button 
              className={styles.controlButton}
              onClick={onClose}
              title="Close"
            >
              <CloseIcon width={20} height={20} />
            </button>
          </div>
        </div>
        
        <div className={styles.content}>
          <div 
            className={styles.documentContainer}
            style={{ transform: `scale(${zoom / 100})` }}
          >
            {document.type === 'pdf' ? (
              <iframe
                src={`${document.url}#page=${currentPage}`}
                className={styles.pdfFrame}
                title={document.name}
              />
            ) : (
              <img
                src={document.url}
                alt={document.name}
                className={styles.documentImage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;