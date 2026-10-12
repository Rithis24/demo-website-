import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{ maxWidth: '480px' }}>
        <div style={{
          fontSize: '4rem',
          fontWeight: 800,
          color: '#0369a1',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1,
          marginBottom: '16px'
        }}>
          404
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
          Page Not Found
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '24px' }}>
          The requested page does not exist or has been relocated in our vehicle hardware directory.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <Home size={16} /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
