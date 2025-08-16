// Document management system enums
export const DocumentCategory = {
  BUSINESS: 'business',
  PERSONAL: 'personal', 
  LEGAL: 'legal',
  FINANCIAL: 'financial',
  MEDICAL: 'medical',
  EDUCATION: 'education',
  OTHER: 'other'
};

export const DocumentType = {
  PDF: 'pdf',
  IMAGE: 'image',
  WORD: 'word',
  EXCEL: 'excel',
  POWERPOINT: 'powerpoint'
};

export const UploadStatus = {
  IDLE: 'idle',
  UPLOADING: 'uploading',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  ERROR: 'error'
};

export const ViewMode = {
  GRID: 'grid',
  LIST: 'list'
};

export const SortBy = {
  NAME: 'name',
  DATE_UPLOADED: 'dateUploaded',
  DATE_MODIFIED: 'dateModified',
  SIZE: 'size',
  CATEGORY: 'category'
};

export const SortOrder = {
  ASC: 'asc',
  DESC: 'desc'
};