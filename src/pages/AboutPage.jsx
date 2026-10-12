import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  CheckCircle, 
  Users, 
  ShoppingBag, 
  ArrowRight,
  FileText
} from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function AboutPage({ onOpenOrder }) {
  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section style={{
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        padding: '64px 0',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">CORPORATE OVERVIEW</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            About MB Automotives India
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '720px', lineHeight: 1.6 }}>
            A Unit of Metro Basket. Leading Indian commercial telematics and vehicle safety hardware manufacturer dedicated to zero-compromise road endurance.
          </p>
        </div>
      </section>

      {/* Main Narrative & Facility Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="about-narrative-grid">
            <div>
              <div className="eyebrow">OUR HERITAGE & MISSION</div>
              <h2 className="section-title">
                Pioneering Safety Hardware for High-Risk Commercial Transit
              </h2>
              <p style={{ color: '#334155', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '18px' }}>
                MB Automotives India was established with a focused purpose: to engineer automotive recording and sensor technology that withstands the severe physical realities of Indian commercial road transport.
              </p>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Standard consumer dashcams frequently suffer capacitor swelling, melted casing, corrupted memory cards, and disconnected power cables when subjected to prolonged 14-hour duty cycles on Indian highway buses and freight trucks.
              </p>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '28px' }}>
                We engineer our dashcams and telematics sensors with wide 9V–36V dynamic voltage clamping, dual supercapacitors, threaded aviation cables, and lockable tamper-proof casing.
              </p>

              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0369a1', fontFamily: 'var(--font-heading)' }} data-count="11570" data-suffix="+">
                    11,570+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Vehicles & Units Equipped</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0369a1', fontFamily: 'var(--font-heading)' }} data-count="20054" data-suffix="+">
                    20,054+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Customer Evaluations</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0369a1', fontFamily: 'var(--font-heading)' }} data-count="60" data-suffix="+">
                    60+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>R&D & Field Specialists</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0369a1', fontFamily: 'var(--font-heading)' }} data-count="100" data-suffix="+">
                    100+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Commercial Hardware Models</div>
                </div>
              </div>
            </div>

            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid #cbd5e1'
              }}>
                <img
                  src="/assets/branding/about-hero-image.png"
                  alt="MB Automotives Manufacturing Facility"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Facility addresses card */}
              <div style={{
                marginTop: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={20} color="#0369a1" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: '#0f172a' }}>Headquarters & Registered Facility:</strong>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>14/145, Niton Estate, Club Road, Kotagiri - 643217, The Nilgiris, Tamil Nadu</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={20} color="#0369a1" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: '#0f172a' }}>Regional Operations Base:</strong>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>Industrial Corridor, Guindy, Chennai - 600032, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">QUALITY ASSURANCE FRAMEWORK</div>
            <h2 className="section-title">The Four Pillars of MB Automotive Engineering</h2>
            <p className="section-subtitle">
              Every unit produced undergoes thorough thermal stress, vibration endurance, and electrical spike validation.
            </p>
          </div>

          <div className="grid-4">
            <div className="card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0284c7', marginBottom: '8px', letterSpacing: '0.05em' }}>01</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '8px' }}>DC 9V–36V Step-Down</h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>
                Integrated heavy-duty buck regulators protect sensitive electronics from voltage surges caused by bus air conditioning starts and alternator surges.
              </p>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0284c7', marginBottom: '8px', letterSpacing: '0.05em' }}>02</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '8px' }}>Thermal Supercapacitors</h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>
                Replaces volatile lithium batteries with industrial supercapacitors that operate safely between -20°C and 70°C without risk of swelling or fire.
              </p>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0284c7', marginBottom: '8px', letterSpacing: '0.05em' }}>03</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '8px' }}>Threaded Aviation 4-Pin</h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>
                Screw-locked aerospace-grade cables guarantee that high-speed video and telemetry signals never disconnect regardless of severe road jarring.
              </p>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0284c7', marginBottom: '8px', letterSpacing: '0.05em' }}>04</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: '8px' }}>Zero Defect (ZED) Scheme</h3>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5 }}>
                Accredited under the Government of India's Zero Defect Zero Effect initiative ensuring each batch meets rigorous factory benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Partner With MB Automotives India
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
            Whether you operate an interstate coach fleet, an institutional bus depot, or a commercial logistics network, we have the hardware ready for deployment.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
            <button onClick={() => onOpenOrder && onOpenOrder()} className="btn btn-primary btn-lg">
              <ShoppingBag size={18} />
              <span>Place an Order</span>
            </button>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-narrative-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
