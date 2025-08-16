import { useState, useMemo } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import ViewToggle from '../ViewToggle/ViewToggle';
import UploadArea from '../UploadArea/UploadArea';
import DocumentCard from '../DocumentCard/DocumentCard';
import DocumentViewer from '../DocumentViewer/DocumentViewer';
import { ViewMode, UploadStatus, DocumentCategory } from '../../types/enums';
import { formatFileSize } from '../../utils/formatters';
import { mockStore } from '../../data/documentMockData';
import styles from './DocumentManagement.module.css';

const DocumentManagement = ({ user, settings }) => {
  // State management
  const [documents, setDocuments] = useState(mockStore.documents);
  const [currentDocument, setCurrentDocument] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(UploadStatus.IDLE);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [viewMode, setViewMode] = useState(ViewMode.GRID);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter and search documents
  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch = searchQuery === '' || 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || doc.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [documents, searchQuery, selectedCategory]);

  // File upload simulation
  const handleFileUpload = async (file) => {
    setUploadStatus(UploadStatus.UPLOADING);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          setUploadStatus(UploadStatus.PROCESSING);
          
          // Simulate processing
          setTimeout(() => {
            const newDocument = {
              id: `doc_${Date.now()}`,
              name: `${selectedCategory || 'DOCUMENT'}_${new Date().toISOString().split('T')[0].replace(/-/g, '')}_${new Date().toTimeString().split(' ')[0].replace(/:/g, '')}.${file.type.split('/')[1]}`,
              originalName: file.name,
              category: selectedCategory || DocumentCategory.OTHER,
              type: file.type.includes('pdf') ? 'pdf' : 'image',
              size: file.size,
              uploadDate: new Date(),
              lastModified: new Date(),
              tags: [],
              url: URL.createObjectURL(file),
              thumbnailUrl: null,
              pageCount: file.type.includes('pdf') ? Math.floor(Math.random() * 20) + 1 : undefined
            };
            
            setDocuments(prev => [newDocument, ...prev]);
            setUploadStatus(UploadStatus.SUCCESS);
            
            setTimeout(() => {
              setUploadStatus(UploadStatus.IDLE);
              setUploadProgress(0);
            }, 2000);
          }, 1500);
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleScanDocument = () => {
    alert('Scan functionality would integrate with device camera or scanner API');
  };

  const handleDocumentClick = (document) => {
    setCurrentDocument(document);
  };

  const handleCloseViewer = () => {
    setCurrentDocument(null);
  };

  const handleEditDocument = (document) => {
    alert(`Edit metadata for: ${document.name}`);
  };

  const handleDownloadDocument = (doc) => {
    const link = window.document.createElement('a');
    link.href = doc.url;
    link.download = doc.name;
    link.click();
  };

  const handleShareDocument = (document) => {
    if (navigator.share) {
      navigator.share({
        title: document.name,
        text: `Check out this document: ${document.name}`,
        url: document.url
      });
    } else {
      navigator.clipboard.writeText(document.url);
      alert('Document link copied to clipboard!');
    }
  };

  const handleDeleteDocument = (document) => {
    if (confirm(`Are you sure you want to delete "${document.name}"?`)) {
      setDocuments(prev => prev.filter(doc => doc.id !== document.id));
    }
  };

  const storagePercentage = (user.storageUsed / user.storageLimit) * 100;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Document Management System</h1>
          <div className={styles.userInfo}>
            <span>Welcome, {user.name}</span>
            <span>•</span>
            <span>Storage: {formatFileSize(user.storageUsed)} / {formatFileSize(user.storageLimit)} ({storagePercentage.toFixed(1)}%)</span>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <UploadArea
          onFileUpload={handleFileUpload}
          onScanDocument={handleScanDocument}
          uploadStatus={uploadStatus}
          uploadProgress={uploadProgress}
        />

        <div className={styles.toolbar}>
          <div className={styles.searchAndFilter}>
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search documents..."
            />
            <FilterDropdown
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          
          <div className={styles.viewControls}>
            <ViewToggle
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>
        </div>

        {filteredDocuments.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateIcon}>📄</div>
            <h3 className={styles.emptyStateTitle}>
              {searchQuery || selectedCategory ? 'No documents found' : 'No documents uploaded yet'}
            </h3>
            <p className={styles.emptyStateDescription}>
              {searchQuery || selectedCategory 
                ? 'Try adjusting your search or filter criteria'
                : 'Upload your first document to get started'
              }
            </p>
          </div>
        ) : (
          <div className={viewMode === ViewMode.GRID ? styles.documentsGrid : styles.documentsList}>
            {filteredDocuments.map(document => (
              <DocumentCard
                key={document.id}
                document={document}
                viewMode={viewMode}
                onClick={handleDocumentClick}
                onEdit={handleEditDocument}
                onDownload={handleDownloadDocument}
                onShare={handleShareDocument}
                onDelete={handleDeleteDocument}
              />
            ))}
          </div>
        )}
      </main>

      {currentDocument && (
        <DocumentViewer
          document={currentDocument}
          onClose={handleCloseViewer}
        />
      )}
    </div>
  );
};

export default DocumentManagement;