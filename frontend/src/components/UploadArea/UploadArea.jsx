import { useState, useRef } from 'react';
import UploadIcon from '../icons/UploadIcon';
import ScanIcon from '../icons/ScanIcon';
import { UploadStatus } from '../../types/enums';
import { formatUploadProgress } from '../../utils/formatters';
import styles from './UploadArea.module.css';

const UploadArea = ({ 
  onFileUpload, 
  onScanDocument, 
  uploadStatus, 
  uploadProgress 
}) => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && onFileUpload) {
      onFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0 && onFileUpload) {
      onFileUpload(files[0]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleScanClick = () => {
    if (onScanDocument) {
      onScanDocument();
    }
  };

  const isUploading = uploadStatus === UploadStatus.UPLOADING || uploadStatus === UploadStatus.PROCESSING;

  return (
    <div 
      className={`${styles.uploadArea} ${dragOver ? styles.dragOver : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={!isUploading ? handleUploadClick : undefined}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.docx"
        onChange={handleFileSelect}
        className={styles.hiddenInput}
      />
      
      <UploadIcon width={48} height={48} className={styles.uploadIcon} />
      
      <h3 className={styles.uploadTitle}>
        {isUploading ? 'Uploading Document...' : 'Upload Document'}
      </h3>
      
      <p className={styles.uploadDescription}>
        {isUploading 
          ? 'Please wait while we process your document'
          : 'Drag and drop files here or click to browse'
        }
      </p>
      
      {!isUploading && (
        <>
          <div className={styles.uploadActions}>
            <button 
              className={`${styles.uploadButton} ${styles.primaryButton}`}
              onClick={(e) => {
                e.stopPropagation();
                handleUploadClick();
              }}
            >
              <UploadIcon width={20} height={20} />
              Choose File
            </button>
            <button 
              className={`${styles.uploadButton} ${styles.secondaryButton}`}
              onClick={(e) => {
                e.stopPropagation();
                handleScanClick();
              }}
            >
              <ScanIcon width={20} height={20} />
              Scan Document
            </button>
          </div>
          
          <div className={styles.uploadInfo}>
            Supported formats: PDF, JPG, PNG, DOCX • Maximum file size: 10MB
          </div>
        </>
      )}
      
      {isUploading && (
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <div className={styles.progressText}>
            {formatUploadProgress(uploadProgress)} - {
              uploadStatus === UploadStatus.UPLOADING ? 'Uploading...' : 'Processing...'
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadArea;