import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: 'Fleet Equipment Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <section style={{
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        padding: '56px 0',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">DIRECT FACTORY CONTACT</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Contact MB Automotives India
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '680px', lineHeight: 1.5 }}>
            Connect with our engineering and commercial sales division for fleet deployments, trade quotations, and depot installation support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Form */}
            <div>
              <div className="eyebrow">SEND US A MESSAGE</div>
              <h2 className="section-title">Commercial & Fleet Inquiry</h2>
              <p style={{ color: '#64748b', fontSize: '0.9375rem', marginBottom: '28px' }}>
                Fill out the form below and an automotive fleet advisor will review your vehicle specifications and respond promptly.
              </p>

              {formSubmitted ? (
                <div style={{
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  borderRadius: '12px',
                  padding: '32px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#065f46', marginBottom: '8px' }}>
                    Inquiry Received Successfully
                  </h3>
                  <p style={{ color: '#047857', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    Thank you for reaching out to MB Automotives India. Our regional fleet manager has received your message and will contact you via phone/email within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', company: '', phone: '', email: '', subject: 'Fleet Equipment Inquiry', message: '' });
                    }}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div className="form-row-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="E.g., Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.875rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Company / Fleet Name
                      </label>
                      <input
                        type="text"
                        placeholder="E.g., Metro Bus Lines"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.875rem'
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91-9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.875rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="fleet@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.875rem'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.875rem',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <option value="Fleet Equipment Inquiry">Commercial Fleet Equipment Inquiry</option>
                      <option value="Bulk Order Quotation">Bulk Order / Trade Quotation</option>
                      <option value="Dealership & Channel Partner">Dealership & Channel Partner Inquiry</option>
                      <option value="Technical Support & Warranty">Technical Support & Warranty</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Message / Vehicle Fleet Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify your vehicle models (e.g. 20 luxury buses, 10 trucks), required features (dual dashcam, DMS, radar), or dispatch city..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.875rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    <Send size={18} />
                    <span>Send Message to MB Automotives</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Direct Facilities & Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Headquarters Card */}
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#e0f2fe',
                    color: '#0369a1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Building size={22} />
                  </div>
                  <div>
                    <span className="badge badge-blue" style={{ marginBottom: '6px' }}>
                      HEADQUARTERS & MANUFACTURING
                    </span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                      Kotagiri Facility
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, marginBottom: '10px' }}>
                      14/145, Niton Estate, Club Road, Kotagiri - 643217, The Nilgiris, Tamil Nadu, India.
                    </p>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      R&D Center, Testing Labs & Registered Entity
                    </div>
                  </div>
                </div>
              </div>

              {/* Chennai Base Card */}
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: '#fef3c7',
                    color: '#b45309',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="badge badge-amber" style={{ marginBottom: '6px' }}>
                      REGIONAL OPERATIONS BASE
                    </span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                      Chennai Depot Base
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, marginBottom: '10px' }}>
                      Industrial Corridor, Guindy, Chennai - 600032, Tamil Nadu, India.
                    </p>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Fleet Integration Support & Logistics Dispatch
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contacts Strip */}
              <div className="card" style={{ padding: '24px', backgroundColor: '#f8fafc' }}>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                  Direct Phone & Email Extensions
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone size={18} color="#0369a1" />
                    <div>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>
                        +91-8489880444 / +91-8220955966
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Primary Commercial Helpline (WhatsApp Enabled)</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={18} color="#0369a1" />
                    <div>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>
                        metrobasketin@gmail.com
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Corporate Sales & Order Desk</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Clock size={18} color="#0369a1" />
                    <div>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>
                        Mon – Sat: 9:00 AM – 7:00 PM IST
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sunday: Closed for routine maintenance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #cbd5e1',
                height: '240px'
              }}>
                <iframe
                  title="MB Automotives Kotagiri Location"
                  src="https://maps.google.com/maps?q=14%2F145%2C%20Niton%20Estate%2C%20Clube%20Road%2C%20Kotagiri%20-%20643217.&t=m&z=12&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
