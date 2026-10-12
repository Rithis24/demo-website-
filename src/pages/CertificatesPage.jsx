import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, ExternalLink, Download, FileCheck, CheckCircle, ArrowRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import CertificateModal from '../components/CertificateModal';

export default function CertificatesPage({ onOpenOrder }) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certificates-page">
      {/* Banner */}
      <section style={{
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        padding: '56px 0',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">LEGAL & QUALITY ASSURANCE</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Accreditations & Government Certifications
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '680px', lineHeight: 1.5 }}>
            Verified government registrations and international quality management certifications validating MB Automotives India as an accredited manufacturing entity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '48px' }}>
            {siteConfig.certificatesList.map((cert) => (
              <div
                key={cert.id}
                className="card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Certificate Thumbnail Preview */}
                <div style={{
                  height: '240px',
                  backgroundColor: '#0f172a',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid #e2e8f0'
                }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <span className="badge badge-amber">{cert.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: '0.8125rem', color: '#64748b', marginBottom: '10px' }}>
                  {cert.subtitle}
                </div>

                <div style={{
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#0369a1',
                  fontWeight: 600,
                  backgroundColor: '#f0f9ff',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  marginBottom: '16px'
                }}>
                  REG NO: {cert.certNumber}
                </div>

                <p style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  {cert.description}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    style={{ flex: 1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                  >
                    <ExternalLink size={14} /> Full Document
                  </button>
                  <a
                    href={cert.image}
                    download
                    className="btn btn-primary btn-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Download size={14} /> Save
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Verification Badges Showcase */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '36px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Statutory Compliance & Standards Emblems
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px auto' }}>
              Recognized under Indian industrial quality standards for automotive telemetry, vehicle GPS tracking, and optical recording devices.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '32px'
            }}>
              {siteConfig.certificateBadges.map((badge) => (
                <div
                  key={badge.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    minWidth: '220px'
                  }}
                >
                  <img src={badge.logo} alt={badge.name} style={{ height: '44px', objectFit: 'contain' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a' }}>{badge.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{badge.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated Link to Channel Partners & OEM Collaborations */}
          <div style={{
            marginTop: '56px',
            backgroundColor: '#0a0f1d',
            borderRadius: '16px',
            padding: '40px',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            border: '1px solid #1e293b'
          }}>
            <div>
              <div className="eyebrow eyebrow-dark">FLEET INTEGRATION ALLIANCES</div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                Our Channel Partners & OEM Collaborations
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
                Explore commercial coach builders, public transport corporations, and interstate logistics operators integrating MB Automotives hardware across India.
              </p>
            </div>
            <Link to="/partners" className="btn btn-primary btn-lg">
              <span>View Channel Partners</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        certificate={selectedCert}
      />
    </div>
  );
}
