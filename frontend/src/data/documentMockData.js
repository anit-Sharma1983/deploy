import { DocumentCategory, DocumentType, UploadStatus, ViewMode, SortBy, SortOrder } from '../types/enums.js';

// Data for global state store
export const mockStore = {
  documents: [
    {
      id: "doc_001",
      name: "BUSINESS_20241215_143022.pdf",
      originalName: "quarterly_report.pdf",
      category: DocumentCategory.BUSINESS,
      type: DocumentType.PDF,
      size: 2048576,
      uploadDate: new Date('2024-12-15T14:30:22Z'),
      lastModified: new Date('2024-12-15T14:30:22Z'),
      tags: ["quarterly", "report", "Q4", "2024"],
      url: "/documents/doc_001.pdf",
      thumbnailUrl: "/thumbnails/doc_001.jpg",
      pageCount: 25
    },
    {
      id: "doc_002",
      name: "LEGAL_20241214_091545.pdf",
      originalName: "contract_agreement.pdf",
      category: DocumentCategory.LEGAL,
      type: DocumentType.PDF,
      size: 1536000,
      uploadDate: new Date('2024-12-14T09:15:45Z'),
      lastModified: new Date('2024-12-14T09:15:45Z'),
      tags: ["contract", "agreement", "legal", "signed"],
      url: "/documents/doc_002.pdf",
      thumbnailUrl: "/thumbnails/doc_002.jpg",
      pageCount: 12
    },
    {
      id: "doc_003",
      name: "FINANCIAL_20241213_162030.pdf",
      originalName: "tax_documents_2024.pdf",
      category: DocumentCategory.FINANCIAL,
      type: DocumentType.PDF,
      size: 3072000,
      uploadDate: new Date('2024-12-13T16:20:30Z'),
      lastModified: new Date('2024-12-13T16:20:30Z'),
      tags: ["tax", "2024", "financial", "documents"],
      url: "/documents/doc_003.pdf",
      thumbnailUrl: "/thumbnails/doc_003.jpg",
      pageCount: 45
    }
  ],
  currentDocument: null,
  uploadStatus: UploadStatus.IDLE,
  uploadProgress: 0,
  viewMode: ViewMode.GRID,
  sortBy: SortBy.DATE_UPLOADED,
  sortOrder: SortOrder.DESC,
  selectedCategory: null,
  searchQuery: ""
};

// Data passed as props to the root component
export const mockRootProps = {
  user: {
    id: "user_001",
    name: "John Doe",
    email: "john.doe@example.com",
    storageUsed: 156789000,
    storageLimit: 1073741824
  },
  settings: {
    autoGenerateNames: true,
    defaultCategory: DocumentCategory.BUSINESS,
    enableMetaSuggestions: true,
    maxFileSize: 10485760
  }
};