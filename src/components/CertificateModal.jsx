import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, certificate }) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !certificate) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(15, 23, 42, 0.82)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        maxWidth: '720px',
        width: '100%',
        maxHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        border: '1px solid #cbd5e1'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8fafc'
        }}>
          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#0369a1',
              letterSpacing: '0.05em'
            }}>
              Official Compliance Document
            </span>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a' }}>
              {certificate.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '6px',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Certificate Image View */}
        <div style={{
          padding: '20px',
          overflowY: 'auto',
          backgroundColor: '#0f172a',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '360px'
        }}>
          <img
            src={certificate.image}
            alt={certificate.title}
            style={{
              maxHeight: '60vh',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: '4px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
            }}
          />
        </div>

        {/* Footer info */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f8fafc',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#334155' }}>
              {certificate.subtitle}
            </div>
            {certificate.certNumber && (
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                Reg ID: {certificate.certNumber}
              </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <ExternalLink size={14} /> Full View
            </a>
            <a
              href={certificate.image}
              download
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Download size={14} /> Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
