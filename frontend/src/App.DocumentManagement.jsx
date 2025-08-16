import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

// Document Filing System - Real Estate Document Management
function DocumentFilingSystem() {
  // Mock data for real estate documents
  const initialDocuments = [
    {
      id: "doc_001",
      name: "LAND_Title_Deeds_20250811_2025_Deed_of_Conveyance_Khasmahal_Land.PDF",
      originalName: "Deed_of_Conveyance_Khasmahal_Land.PDF",
      category: "Land Records",
      type: "pdf",
      size: 4618240, // 4.41 MB
      uploadDate: new Date('2025-08-11'),
      lastModified: new Date('2025-08-11'),
      tags: ["2025-001", "Title Deeds"],
      url: "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoxMDAgNzAwIFRkCihEZWVkIG9mIENvbnZleWFuY2UpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAowMDAwMDAwMjQ1IDAwMDAwIG4gCjAwMDAwMDAzMjMgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSA2Ci9Sb290IDEgMCBSCj4+CnN0YXJ0eHJlZgo0MTYKJSVFT0Y=",
      description: "A deed of conveyance related to Khasmahal land.",
      projectName: "Khasmahal Land Project",
      legalEntity: "Khasmahal Development Corp",
      documentYear: "2025",
      pageCount: 15
    },
    {
      id: "doc_002",
      name: "LAND_Survey_Maps_20200619_2020_33A_3_Geotechnical_Survey_Soil_Testing_19_06_2020.pdf",
      originalName: "33A-3_Geotechnical_Survey_(Soil_Testing)_19.06.2020.pdf",
      category: "Land Records",
      type: "pdf",
      size: 2856960,
      uploadDate: new Date('2020-06-19'),
      lastModified: new Date('2020-06-19'),
      tags: ["Survey Maps"],
      url: "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggNTIKPj4Kc3RyZWFtCkJUCi9GMSAxMiBUZgoxMDAgNzAwIFRkCihHZW90ZWNobmljYWwgU3VydmV5IERvY3VtZW50KSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDI0NSAwMDAwMCBuIAowMDAwMDAwMzIzIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDI0CiUlRU9G",
      description: "Geotechnical survey document related to soil testing.",
      projectName: "33A-3 Development",
      legalEntity: "Survey Corp Ltd",
      documentYear: "2020",
      pageCount: 8
    }
  ];

  // State management
  const [documents, setDocuments] = useState(initialDocuments);
  const [currentDocument, setCurrentDocument] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadForm, setShowUploadForm] = useState(false);

  // Utility functions
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  // Statistics calculations
  const totalDocuments = documents.length;
  const thisMonthDocuments = documents.filter(doc => {
    const now = new Date();
    const docDate = new Date(doc.uploadDate);
    return docDate.getMonth() === now.getMonth() && docDate.getFullYear() === now.getFullYear();
  }).length;
  
  const categories = [...new Set(documents.map(doc => doc.category))];
  const activeCategories = categories.length;
  
  const years = [...new Set(documents.map(doc => new Date(doc.uploadDate).getFullYear()))];
  const fiscalYears = years.length;

  // Category counts
  const landRecordsCount = documents.filter(doc => doc.category === 'Land Records').length;
  const accountingCount = documents.filter(doc => doc.category === 'Accounting').length;

  // Event handlers
  const handleFileUpload = async (file, metadata) => {
    setUploadStatus('uploading');
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          setUploadStatus('processing');
          
          setTimeout(() => {
            // Create new document with metadata
            const reader = new FileReader();
            reader.onload = function(e) {
              const newDocument = {
                id: `doc_${Date.now()}`,
                name: metadata.customFileName || generateAutoFileName(selectedFile, metadata.category),
                originalName: file.name,
                category: metadata.category,
                type: file.type.includes('pdf') ? 'pdf' : 'image',
                size: file.size,
                uploadDate: new Date(metadata.uploadDate), // Today's date
                documentDate: new Date(metadata.documentDate), // Actual document date
                lastModified: new Date(),
                tags: [metadata.documentYear],
                url: e.target.result,
                description: metadata.description,
                projectName: metadata.projectName,
                legalEntity: metadata.legalEntity,
                documentYear: metadata.documentYear,
                pageCount: Math.floor(Math.random() * 20) + 1
              };
              
              setDocuments(prev => [newDocument, ...prev]);
              setUploadStatus('success');
              setShowUploadForm(false);
              
              setTimeout(() => {
                setUploadStatus('idle');
                setUploadProgress(0);
              }, 2000);
            };
            reader.readAsDataURL(file);
          }, 1500);
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleDocumentClick = (document) => {
    setCurrentDocument(document);
  };

  const handleCloseViewer = () => {
    setCurrentDocument(null);
  };

  // Filter documents
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchQuery === '' || 
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Navigation Component
  const Navigation = () => (
    <nav style={{
      display: 'flex',
      gap: '32px',
      padding: '0 24px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: 'white'
    }}>
      {[
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'upload', label: 'Upload', icon: '📤' },
        { id: 'search', label: 'Search', icon: '🔍' },
        { id: 'documents', label: 'Documents', icon: '📁' }
      ].map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            padding: '16px 0',
            border: 'none',
            background: 'none',
            fontSize: '14px',
            fontWeight: '500',
            color: activeTab === tab.id ? '#3b82f6' : '#6b7280',
            borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div style={{ padding: '24px' }}>
      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '32px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '20px' }}>📄</span>
            <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Total Documents</span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>{totalDocuments}</div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Across all categories</div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '20px' }}>📈</span>
            <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>This Month</span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>{thisMonthDocuments}</div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Documents uploaded</div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '20px' }}>📂</span>
            <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Categories</span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>{activeCategories}</div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Active categories</div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '20px' }}>📅</span>
            <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Fiscal Years</span>
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#111827' }}>{fiscalYears}</div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Years covered</div>
        </div>
      </div>

      {/* Documents by Category */}
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        marginBottom: '32px'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#111827' }}>
          Documents by Category
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🏠</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>
              {landRecordsCount}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Land Records</div>
          </div>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📊</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>
              {accountingCount}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Accounting</div>
          </div>
        </div>
      </div>

      {/* Recent Documents */}
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#111827' }}>
          Recent Documents
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {documents.slice(0, 3).map(doc => (
            <div
              key={doc.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => handleDocumentClick(doc)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                📄
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                  {doc.name}
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>
                  Original: {doc.originalName}
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>
                  {doc.description}
                </div>
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
                  <span>{doc.category}</span>
                  <span>•</span>
                  <span>{doc.tags.join(', ')}</span>
                  <span>•</span>
                  <span>Doc: {formatDate(doc.documentDate || doc.uploadDate)}</span>
                  <span>•</span>
                  <span>Upload: {formatDate(doc.uploadDate)}</span>
                  <span>•</span>
                  <span>{formatFileSize(doc.size)}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '12px',
                    backgroundColor: 'white',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDocumentClick(doc);
                  }}
                >
                  👁️ View
                </button>
                <button
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #dc2626',
                    borderRadius: '6px',
                    fontSize: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm(`Are you sure you want to delete "${doc.name}"?`)) {
                      setDocuments(prev => prev.filter(d => d.id !== doc.id));
                    }
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Upload Form Component with Side-by-Side Preview
  const UploadForm = () => {
    const [formData, setFormData] = useState({
      category: '',
      documentDate: '',
      uploadDate: new Date().toISOString().split('T')[0], // Today's date
      documentYear: new Date().getFullYear().toString(),
      projectName: '',
      legalEntity: '',
      description: '',
      customFileName: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreviewUrl, setFilePreviewUrl] = useState(null);
    const [isEditingName, setIsEditingName] = useState(false);

    const generateAutoFileName = (file, category) => {
      if (!file || !category) return '';
      
      const fileNameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      const cleanFileName = fileNameWithoutExt.replace(/[^a-zA-Z0-9_]/g, '_');
      const categoryPrefix = category.toUpperCase().replace(/\s+/g, '_');
      const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
      const extension = file.name.split('.').pop();
      
      return `${categoryPrefix}_${cleanFileName}_${dateStr}.${extension}`;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedFile && formData.category) {
        const finalFormData = {
          ...formData,
          customFileName: formData.customFileName || generateAutoFileName(selectedFile, formData.category)
        };
        handleFileUpload(selectedFile, finalFormData);
        // Reset form after upload
        setSelectedFile(null);
        setFilePreviewUrl(null);
        setFormData({
          category: '',
          documentDate: '',
          uploadDate: new Date().toISOString().split('T')[0],
          documentYear: new Date().getFullYear().toString(),
          projectName: '',
          legalEntity: '',
          description: '',
          customFileName: ''
        });
      }
    };

    const handleFileSelect = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
        
        // Generate auto filename
        if (formData.category) {
          const autoName = generateAutoFileName(file, formData.category);
          setFormData(prev => ({ ...prev, customFileName: autoName }));
        }
        
        // Create preview URL
        const reader = new FileReader();
        reader.onload = function(e) {
          setFilePreviewUrl(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleCategoryChange = (category) => {
      setFormData(prev => ({ ...prev, category }));
      
      // Auto-generate filename when category changes
      if (selectedFile) {
        const autoName = generateAutoFileName(selectedFile, category);
        setFormData(prev => ({ ...prev, customFileName: autoName }));
      }
    };

    const handleFileNameEdit = () => {
      setIsEditingName(true);
    };

    const handleFileNameSave = () => {
      setIsEditingName(false);
    };

    const clearSelectedFile = () => {
      setSelectedFile(null);
      setFilePreviewUrl(null);
      setFormData(prev => ({ ...prev, customFileName: '' }));
    };

    return (
      <div style={{ padding: '24px' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{
            margin: '0 0 24px 0',
            fontSize: '20px',
            fontWeight: '700',
            color: '#111827',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            📤 Upload Document
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: selectedFile ? '1fr 1fr' : '1fr',
            gap: '32px'
          }}>
            {/* Upload Form */}
            <div>
              <form onSubmit={handleSubmit}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    Document Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="">Select category</option>
                    <option value="Land Records">Land Records</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Legal">Legal</option>
                    <option value="Permits">Permits</option>
                    <option value="Contracts">Contracts</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    Document Date *
                  </label>
                  <input
                    type="date"
                    value={formData.documentDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, documentDate: e.target.value }))}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    Upload Date (Today)
                  </label>
                  <input
                    type="date"
                    value={formData.uploadDate}
                    readOnly
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      backgroundColor: '#f9fafb',
                      color: '#6b7280'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    Document Year * (Auto-selected)
                  </label>
                  <select
                    value={formData.documentYear}
                    onChange={(e) => setFormData(prev => ({ ...prev, documentYear: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      backgroundColor: 'white'
                    }}
                  >
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '6px'
                }}>
                  Document Date *
                </label>
                <input
                  type="date"
                  value={formData.documentDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, documentDate: e.target.value }))}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '6px'
                }}>
                  Document Year * (Auto-selected)
                </label>
                <select
                  value={formData.documentYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, documentYear: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    backgroundColor: 'white'
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '6px'
                }}>
                  Project/Land Name
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
                  placeholder="Enter project or land name"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }}>
                Legal Entity Name
              </label>
              <input
                type="text"
                value={formData.legalEntity}
                onChange={(e) => setFormData(prev => ({ ...prev, legalEntity: e.target.value }))}
                placeholder="Enter legal entity name"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }}>
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description of the document"
                rows={3}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  resize: 'vertical'
                }}
              />
            </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    Select File *
                  </label>
                  <div style={{
                    border: selectedFile ? '2px solid #10b981' : '2px dashed #d1d5db',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: selectedFile ? '#f0fdf4' : '#f9fafb',
                    position: 'relative'
                  }}>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.png,.xlsx"
                      onChange={handleFileSelect}
                      style={{ display: 'none' }}
                      id="file-upload"
                    />
                    {!selectedFile ? (
                      <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
                        <div style={{ fontSize: '48px', marginBottom: '12px' }}>📄</div>
                        <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                          Click to select file or drag and drop
                        </div>
                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                          PDF, DOC, DOCX, JPG, PNG, XLSX files accepted
                        </div>
                      </label>
                    ) : (
                      <div>
                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>✅</div>
                        <div style={{ fontSize: '14px', color: '#059669', fontWeight: '500', marginBottom: '4px' }}>
                          File Selected: {selectedFile.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>
                          Size: {formatFileSize(selectedFile.size)}
                        </div>
                        <button
                          type="button"
                          onClick={clearSelectedFile}
                          style={{
                            padding: '4px 8px',
                            border: '1px solid #dc2626',
                            borderRadius: '4px',
                            fontSize: '12px',
                            backgroundColor: '#fef2f2',
                            color: '#dc2626',
                            cursor: 'pointer'
                          }}
                        >
                          🗑️ Remove File
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    File Name (Auto-generated)
                  </label>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {!isEditingName ? (
                      <>
                        <input
                          type="text"
                          value={formData.customFileName}
                          readOnly
                          style={{
                            flex: 1,
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            backgroundColor: '#f9fafb',
                            color: '#6b7280'
                          }}
                        />
                        <button
                          type="button"
                          onClick={handleFileNameEdit}
                          disabled={!selectedFile}
                          style={{
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '12px',
                            backgroundColor: 'white',
                            color: '#374151',
                            cursor: selectedFile ? 'pointer' : 'not-allowed',
                            opacity: selectedFile ? 1 : 0.5
                          }}
                        >
                          ✏️ Edit
                        </button>
                      </>
                    ) : (
                      <>
                        <input
                          type="text"
                          value={formData.customFileName}
                          onChange={(e) => setFormData(prev => ({ ...prev, customFileName: e.target.value }))}
                          style={{
                            flex: 1,
                            padding: '10px 12px',
                            border: '1px solid #3b82f6',
                            borderRadius: '6px',
                            fontSize: '14px'
                          }}
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={handleFileNameSave}
                          style={{
                            padding: '10px 12px',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            backgroundColor: '#10b981',
                            color: 'white',
                            cursor: 'pointer'
                          }}
                        >
                          💾 Save
                        </button>
                      </>
                    )}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#6b7280',
                    marginTop: '4px'
                  }}>
                    Format: CATEGORY_FileName_YYYYMMDD (without time)
                  </div>
                </div>

            {uploadStatus === 'uploading' || uploadStatus === 'processing' ? (
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginBottom: '8px'
                }}>
                  <div 
                    style={{
                      height: '100%',
                      backgroundColor: '#3b82f6',
                      width: `${uploadProgress}%`,
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280', textAlign: 'center' }}>
                  {Math.round(uploadProgress)}% - {
                    uploadStatus === 'uploading' ? 'Uploading...' : 'Processing...'
                  }
                </div>
              </div>
            ) : null}

                <button
                  type="submit"
                  disabled={!selectedFile || !formData.category || uploadStatus === 'uploading'}
                  style={{
                    width: '100%',
                    padding: '12px 24px',
                    backgroundColor: selectedFile && formData.category ? '#3b82f6' : '#9ca3af',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: selectedFile && formData.category ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  📤 Upload Document
                </button>
              </form>
            </div>

            {/* File Preview Panel */}
            {selectedFile && (
              <div>
                <h3 style={{
                  margin: '0 0 16px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  👁️ File Preview
                </h3>
                
                <div style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#f9fafb'
                }}>
                  {/* Preview Header */}
                  <div style={{
                    padding: '12px 16px',
                    backgroundColor: '#f3f4f6',
                    borderBottom: '1px solid #e5e7eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
                        {selectedFile.name}
                      </div>
                      <div style={{ fontSize: '12px', color: '#6b7280' }}>
                        {formatFileSize(selectedFile.size)} • {selectedFile.type}
                      </div>
                    </div>
                    <button
                      onClick={clearSelectedFile}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #dc2626',
                        borderRadius: '4px',
                        fontSize: '12px',
                        backgroundColor: '#fef2f2',
                        color: '#dc2626',
                        cursor: 'pointer'
                      }}
                    >
                      🗑️ Remove
                    </button>
                  </div>

                  {/* Preview Content */}
                  <div style={{
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                  }}>
                    {selectedFile.type === 'application/pdf' ? (
                      filePreviewUrl ? (
                        <iframe
                          src={filePreviewUrl}
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          title="PDF Preview"
                        />
                      ) : (
                        <div style={{ textAlign: 'center', color: '#6b7280' }}>
                          <div style={{ fontSize: '48px', marginBottom: '12px' }}>📄</div>
                          <div>PDF Preview Loading...</div>
                        </div>
                      )
                    ) : selectedFile.type.startsWith('image/') ? (
                      filePreviewUrl ? (
                        <img
                          src={filePreviewUrl}
                          alt="Preview"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      ) : (
                        <div style={{ textAlign: 'center', color: '#6b7280' }}>
                          <div style={{ fontSize: '48px', marginBottom: '12px' }}>🖼️</div>
                          <div>Image Preview Loading...</div>
                        </div>
                      )
                    ) : (
                      <div style={{ textAlign: 'center', color: '#6b7280' }}>
                        <div style={{ fontSize: '48px', marginBottom: '12px' }}>📄</div>
                        <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px' }}>
                          {selectedFile.type.toUpperCase()} File
                        </div>
                        <div style={{ fontSize: '12px' }}>
                          Preview not available for this file type
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* File Info */}
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: '6px'
                }}>
                  <div style={{ fontSize: '12px', color: '#1e40af', fontWeight: '500', marginBottom: '4px' }}>
                    📋 File Information
                  </div>
                  <div style={{ fontSize: '11px', color: '#3730a3' }}>
                    <div>Original Name: {selectedFile.name}</div>
                    <div>Size: {formatFileSize(selectedFile.size)}</div>
                    <div>Type: {selectedFile.type}</div>
                    <div>Upload Date: {formData.uploadDate}</div>
                    <div>Document Date: {formData.documentDate || 'Not set'}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Document Viewer Modal with Enhanced PDF Support
  const DocumentViewer = ({ document }) => {
    if (!document) return null;

    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={handleCloseViewer}
      >
        <div 
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            width: '95vw',
            height: '95vh',
            maxWidth: '1400px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px rgba(0,0,0,0.1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb',
            borderRadius: '12px 12px 0 0'
          }}>
            <div>
              <h2 style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}>
                {document.name}
              </h2>
              <p style={{
                margin: '4px 0 0 0',
                fontSize: '14px',
                color: '#6b7280'
              }}>
                {document.description} • {formatFileSize(document.size)}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => {
                  const link = window.document.createElement('a');
                  link.href = document.url;
                  link.download = document.name;
                  link.click();
                }}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                📥 Download
              </button>
              <button
                onClick={handleCloseViewer}
                style={{
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                ✕ Close
              </button>
            </div>
          </div>
          
          <div style={{
            flex: 1,
            overflow: 'hidden',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {document.type === 'pdf' ? (
              <iframe
                src={document.url}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  backgroundColor: 'white'
                }}
                title={document.name}
              />
            ) : (
              <img
                src={document.url}
                alt={document.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  // Documents List Component
  const DocumentsList = () => (
    <div style={{ padding: '24px' }}>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#111827' }}>
            All Documents
          </h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                width: '250px'
              }}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }}
            >
              <option value="all">All Categories</option>
              <option value="Land Records">Land Records</option>
              <option value="Accounting">Accounting</option>
              <option value="Legal">Legal</option>
              <option value="Permits">Permits</option>
              <option value="Contracts">Contracts</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filteredDocuments.map(doc => (
            <div
              key={doc.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => handleDocumentClick(doc)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                📄
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                  {doc.name}
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>
                  Original: {doc.originalName}
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>
                  {doc.description}
                </div>
                <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>
                  <span>{doc.category}</span>
                  <span>•</span>
                  <span>{doc.tags.join(', ')}</span>
                  <span>•</span>
                  <span>Doc: {formatDate(doc.documentDate || doc.uploadDate)}</span>
                  <span>•</span>
                  <span>Upload: {formatDate(doc.uploadDate)}</span>
                  <span>•</span>
                  <span>{formatFileSize(doc.size)}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '12px',
                    backgroundColor: 'white',
                    color: '#374151',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDocumentClick(doc);
                  }}
                >
                  👁️ View
                </button>
                <button
                  style={{
                    padding: '6px 12px',
                    border: '1px solid #dc2626',
                    borderRadius: '6px',
                    fontSize: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm(`Are you sure you want to delete "${doc.name}"?`)) {
                      setDocuments(prev => prev.filter(d => d.id !== doc.id));
                    }
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#f9fafb',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        padding: '20px 24px',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ 
              margin: 0, 
              color: '#111827',
              fontSize: '24px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              📁 Document Filing System
            </h1>
            <p style={{
              margin: '4px 0 0 0',
              color: '#6b7280',
              fontSize: '14px'
            }}>
              Real Estate Document Management & Compliance System
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            color: '#6b7280',
            fontSize: '14px'
          }}>
            <span>Total Documents</span>
            <div style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700'
            }}>
              {totalDocuments}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'upload' && <UploadForm />}
        {activeTab === 'search' && <DocumentsList />}
        {activeTab === 'documents' && <DocumentsList />}
      </main>

      {/* Document Viewer Modal */}
      <DocumentViewer document={currentDocument} />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <DocumentFilingSystem />
    </ErrorBoundary>
  );
}

export default App;