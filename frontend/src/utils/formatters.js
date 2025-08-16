import { DocumentCategory, DocumentType } from '../types/enums.js';

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export const formatCategoryDisplay = (category) => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const formatDocumentType = (type) => {
  return type.toUpperCase();
};

export const formatUploadProgress = (progress) => {
  return `${Math.round(progress)}%`;
};

export const generateDocumentName = (category, type, timestamp) => {
  const categoryPrefix = category.toUpperCase();
  const dateStr = timestamp.toISOString().split('T')[0].replace(/-/g, '');
  const timeStr = timestamp.toTimeString().split(' ')[0].replace(/:/g, '');
  return `${categoryPrefix}_${dateStr}_${timeStr}.${type}`;
};