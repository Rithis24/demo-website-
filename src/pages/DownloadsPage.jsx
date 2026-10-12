import React from 'react';
import { Download, FileText, Smartphone, Monitor, ExternalLink } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function DownloadsPage({ onOpenOrder }) {
  return (
    <div className="downloads-page">
      {/* Banner */}
      <section style={{
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        padding: '56px 0',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">RESOURCES & SOFTWARE</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Catalogues, Drivers & Fleet Telematics APKs
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '680px', lineHeight: 1.5 }}>
            Download verified hardware specification sheets, printable commercial catalogues, Android APKs, and CMS desktop monitoring clients.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          {/* Section 1: Official Catalogues & Documentation */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ marginBottom: '24px' }}>
              <div className="eyebrow">PRINTABLE PDF CATALOGUES</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
                Hardware Specifications & Corporate Booklets
              </h2>
            </div>

            <div className="grid-2">
              {/* Card 1: Master Catalogue */}
              <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    backgroundColor: '#e0f2fe',
                    color: '#0369a1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileText size={28} />
                  </div>
                  <div>
                    <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
                      PDF DOCUMENT • OFFICIAL
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                      MB Automotives Master Product Catalogue
                    </h3>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Comprehensive guide covering all 100+ commercial dashcams, dual-lens black boxes, radar sensors, and cables.
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  fontSize: '0.8125rem',
                  color: '#475569'
                }}>
                  Includes complete pinout wiring diagrams, electrical voltage ratings, and camera field-of-view specifications.
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                  <a
                    href="/assets/docs/MB-Catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    <Download size={16} />
                    <span>Download Master Catalogue (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Corporate Booklet */}
              <div className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '10px',
                    backgroundColor: '#fef3c7',
                    color: '#b45309',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileText size={28} />
                  </div>
                  <div>
                    <span className="badge badge-amber" style={{ marginBottom: '6px' }}>
                      PDF DOCUMENT • FLEET PROFILE
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                      MB Automotives India Corporate Booklet
                    </h3>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Company credentials, manufacturing methodology, client case studies, and warranty assurance guidelines.
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  fontSize: '0.8125rem',
                  color: '#475569'
                }}>
                  Recommended for government transport department tenders, corporate purchasing managers, and fleet operators.
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                  <a
                    href="/assets/docs/MB-Automotives-India-Booklet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1 }}
                  >
                    <Download size={16} />
                    <span>Download Corporate Booklet (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Telematics Applications & Mobile APKs */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div className="eyebrow">TELEMATICS SOFTWARE & APPS</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
                Live Surveillance & GPS Telematics Applications
              </h2>
            </div>

            <div className="grid-2">
              {siteConfig.applications.map((app) => (
                <div key={app.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '8px',
                        backgroundColor: '#f1f5f9',
                        color: '#0369a1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {app.fileType.includes('APK') ? <Smartphone size={22} /> : <Monitor size={22} />}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a' }}>
                          {app.name}
                        </h3>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                          {app.category}
                        </div>
                      </div>
                    </div>
                    <span className="badge badge-slate">{app.fileType}</span>
                  </div>

                  <p style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                    {app.desc}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                    <a
                      href={app.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    >
                      <Download size={14} />
                      <span>Download {app.fileType}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
