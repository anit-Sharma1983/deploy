import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#f9fafb',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            maxWidth: '600px',
            width: '100%'
          }}>
            <h1 style={{ 
              color: '#dc2626', 
              marginBottom: '16px',
              fontSize: '24px',
              fontWeight: '700'
            }}>
              Document Management System
            </h1>
            <h2 style={{ 
              color: '#374151', 
              marginBottom: '16px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              Something went wrong
            </h2>
            <p style={{ 
              color: '#6b7280', 
              marginBottom: '24px',
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              There was an error loading the application. Please check the browser console for more details.
            </p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Reload Page
            </button>
            {this.state.error && (
              <details style={{ 
                marginTop: '24px', 
                textAlign: 'left',
                backgroundColor: '#fef2f2',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #fecaca'
              }}>
                <summary style={{ 
                  cursor: 'pointer', 
                  fontWeight: '500',
                  color: '#dc2626',
                  marginBottom: '8px'
                }}>
                  Error Details
                </summary>
                <pre style={{ 
                  fontSize: '12px', 
                  color: '#7f1d1d',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}>
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;