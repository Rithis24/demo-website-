import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  ExternalLink, 
  CheckCircle, 
  Handshake, 
  Truck, 
  Bus, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function PartnersPage({ onOpenOrder }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const partnerCategories = [
    { id: 'all', label: 'All Collaborations' },
    { id: 'coach', label: 'Coach & Bus Body Builders' },
    { id: 'fleet', label: 'Fleet Telematics & Systems' },
    { id: 'logistics', label: 'Logistics & Transit Networks' }
  ];

  // Extended partner metadata mapping
  const partnersWithDetails = siteConfig.channelPartners.map((partner, idx) => {
    let category = 'fleet';
    let scope = 'Commercial dashcam systems, 9V–36V surge power clamping, and multi-channel GPS telemetry.';

    if (partner.name.includes('Veera') || partner.name.includes('SSC') || partner.name.includes('Coach')) {
      category = 'coach';
      scope = 'Factory assembly line dashcam integration, custom interior wiring harnesses, and windshield black box mounts.';
    } else if (partner.name.includes('Logistics') || partner.name.includes('Transit') || partner.name.includes('Interstate')) {
      category = 'logistics';
      scope = 'Heavy freight telemetry, driver drowsiness warning sensors, and continuous G-sensor shock collision logging.';
    }

    return {
      ...partner,
      category,
      scope,
      since: 'Certified Partner',
      activeUnits: '500+ Units Deployed'
    };
  });

  const filteredPartners = activeFilter === 'all'
    ? partnersWithDetails
    : partnersWithDetails.filter(p => p.category === activeFilter);

  return (
    <div className="partners-page">
      {/* Banner */}
      <section style={{
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        padding: '60px 0',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">STRATEGIC ALLIANCES & INTEGRATION</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px', letterSpacing: '-0.02em' }}>
            Our Channel Partners & OEM Collaborations
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '720px', lineHeight: 1.6 }}>
            MB Automotives India collaborates with recognized commercial vehicle body builders, state & private transport operators, and national logistics fleets to integrate certified dashcam and telemetry hardware directly into vehicle builds.
          </p>
        </div>
      </section>

      {/* Main Partners Showcase */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '44px',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <div style={{
              display: 'inline-flex',
              backgroundColor: '#f1f5f9',
              borderRadius: '10px',
              padding: '4px',
              border: '1px solid #e2e8f0',
              flexWrap: 'wrap',
              gap: '4px'
            }}>
              {partnerCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: activeFilter === cat.id ? 700 : 500,
                    backgroundColor: activeFilter === cat.id ? '#0284c7' : 'transparent',
                    color: activeFilter === cat.id ? '#ffffff' : '#475569',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Partners Grid — 3 COLUMNS */}
          <div className="grid-3" style={{ marginBottom: '64px' }}>
            {filteredPartners.map((partner, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ 
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px'
                }}
              >
                {/* Partner Logo Stage */}
                <div style={{
                  height: '110px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  marginBottom: '20px'
                }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                  />
                </div>

                {/* Partner Details */}
                <div style={{ marginBottom: '10px' }}>
                  <span className="badge badge-blue">
                    {partner.subtitle}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {partner.name}
                </h3>

                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, marginBottom: '20px', flex: 1 }}>
                  {partner.scope}
                </p>

                {/* Collaboration Tags */}
                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.75rem',
                  color: '#475569'
                }}>
                  <span style={{ fontWeight: 600, color: '#0284c7' }}>
                    {partner.since}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                    {partner.activeUnits}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* OEM Engineering Synergy Pillars */}
          <div style={{
            backgroundColor: '#0a0f1d',
            borderRadius: '16px',
            padding: '48px 36px',
            color: '#ffffff',
            marginBottom: '48px',
            border: '1px solid #1e293b'
          }}>
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px auto' }}>
              <div className="eyebrow eyebrow-dark">FACTORY-GRADE COLLABORATION</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                How We Integrate with OEM Chassis Builders
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Engineering solutions tailored specifically for body builders, transit fleets, and commercial vehicle assembly lines across India.
              </p>
            </div>

            <div className="grid-3">
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#38bdf8', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                  01. PRE-WIRING & HARNESS DESIGN
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  We supply custom threaded aviation wire harnesses matched to specific bus chassis lengths (5m, 10m, 15m), enabling assembly teams to pre-wire conduits before body panels are sealed.
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#38bdf8', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                  02. REGULATORY AIS & MSME CONFORMANCE
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  All hardware meets Indian vehicle safety mandates with official MSME Udyam registration, Bronze ZED certification, and ISO 9001:2015 quality traceability documentation.
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#38bdf8', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                  03. REGIONAL ON-SITE TECHNICIANS
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  Our technical field specialists provide on-depot pilot installations, calibration for AI DMS fatigue cameras, and warranty spare parts replenishment from Chennai and Kotagiri facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Onboarding CTA */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Join the MB Automotives Channel Network
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0, maxWidth: '620px', lineHeight: 1.5 }}>
                Are you a commercial coach fabricator, fleet telematics provider, or transport distributor? Connect with our OEM engineering team for test samples and wholesale partner agreements.
              </p>
            </div>
            <button
              onClick={() => onOpenOrder && onOpenOrder({ title: "Channel Partner / OEM Inquiry" })}
              className="btn btn-primary btn-lg"
            >
              <span>Initiate OEM Partnership</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
