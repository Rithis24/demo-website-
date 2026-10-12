import React, { useState } from 'react';
import { Play, Image as ImageIcon, Video, ShoppingBag, X, Maximize2 } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function GalleryPage({ onOpenOrder }) {
  const [activeTab, setActiveTab] = useState('videos');
  const [previewPhoto, setPreviewPhoto] = useState(null);

  // Static installation gallery showcasing commercial hardware in action
  const photoGallery = [
    { 
      title: "MB Bus Dual Black Box In-Cabin Mount", 
      image: "/assets/branding/about-hero-image.png", 
      category: "Coach Installation",
      desc: "Windshield mount showing dual-lens alignment, tidy cable run, and full driver cabin & highway view."
    },
    { 
      title: "AI Driver Monitoring Sensor Alignment", 
      image: "/assets/products/mb-dms-driver-monitoring-system-gallery-1.jpg", 
      category: "AI DMS",
      desc: "Driver-facing optical sensor installed on the dashboard pillar for fatigue and attention tracking."
    },
    { 
      title: "Forward ADAS Collision Camera Feed", 
      image: "/assets/products/mb-dms-driver-monitoring-system-gallery-2.jpg", 
      category: "ADAS Optics",
      desc: "Forward-facing camera capturing multi-lane commercial traffic for lane-drift and headway alerts."
    },
    { 
      title: "Commercial Bus Dashboard Integration", 
      image: "/assets/products/mb-bus-black-box-smart-gallery-1.jpg", 
      category: "Dashboard Mount",
      desc: "Clean dashboard integration with heavy-duty 9V–36V surge-protected vehicle power supply."
    },
    { 
      title: "All-Weather Two-Wheeler Chassis Mount", 
      image: "/assets/products/mb-bike-black-box-smart-gallery-1.jpg", 
      category: "Motorcycle System",
      desc: "IP67 sealed camera assembly with vibration damping bracket for two-wheelers and scooters."
    },
    { 
      title: "Heavy Duty Ultrasonic Sensor Placement", 
      image: "/assets/products/mb-parking-sensor-gallery-1.png", 
      category: "Radar & Sensors",
      desc: "Chassis rear bumper placement with threaded locking cables for full blind-spot coverage."
    }
  ];

  return (
    <div className="gallery-page">
      {/* Banner */}
      <section style={{
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        padding: '56px 0',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">VISUAL EVIDENCE & MEDIA</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            In-Vehicle Telematics & Installation Gallery
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '680px', lineHeight: 1.5 }}>
            Real commercial footage recorded on MB Dashcams and field installation photos across passenger coaches, freight trucks, and institutional buses.
          </p>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          {/* Tab Selector */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'inline-flex',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '4px',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <button
                onClick={() => setActiveTab('videos')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: activeTab === 'videos' ? 700 : 500,
                  backgroundColor: activeTab === 'videos' ? '#0369a1' : 'transparent',
                  color: activeTab === 'videos' ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease',
                  cursor: 'pointer'
                }}
              >
                <Video size={16} />
                <span>Video Demonstrations</span>
              </button>

              <button
                onClick={() => setActiveTab('photos')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: activeTab === 'photos' ? 700 : 500,
                  backgroundColor: activeTab === 'photos' ? '#0369a1' : 'transparent',
                  color: activeTab === 'photos' ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease',
                  cursor: 'pointer'
                }}
              >
                <ImageIcon size={16} />
                <span>Fleet Installation Photos</span>
              </button>
            </div>
          </div>

          {/* Videos Grid — 3 COLUMNS with UNIFORM 16:9 RESOLUTION STAGE */}
          {activeTab === 'videos' && (
            <div className="grid-3" style={{ alignItems: 'stretch' }}>
              {siteConfig.videos.map((vid, idx) => (
                <div 
                  key={idx} 
                  className="card" 
                  style={{ 
                    overflow: 'hidden', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    backgroundColor: '#ffffff'
                  }}
                >
                  {/* Common 16:9 Cinema HD Resolution Stage */}
                  <div style={{ 
                    position: 'relative', 
                    width: '100%', 
                    paddingTop: '56.25%', // Strict 16:9 Aspect Ratio (e.g. 1920x1080)
                    backgroundColor: '#000000',
                    overflow: 'hidden'
                  }}>
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain', 
                        backgroundColor: '#000000',
                        display: 'block' 
                      }}
                      poster={vid.poster || "/assets/branding/about-hero-image.png"}
                    >
                      <source src={vid.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  {/* Card Content with Identical Alignment */}
                  <div style={{ 
                    padding: '24px', 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                        <span className="badge badge-blue">
                          {vid.badge || 'COMMERCIAL IN-VEHICLE RECORDING'}
                        </span>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#64748b', fontWeight: 600 }}>
                          1080P HD
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', minHeight: '44px', display: 'flex', alignItems: 'center' }}>
                        {vid.title}
                      </h3>
                      <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                        {vid.desc || 'Full HD playback showing dual-lens synchronisation, nighttime passenger cabin clarity, and automated G-sensor event triggers.'}
                      </p>
                    </div>

                    <div style={{ 
                      paddingTop: '16px', 
                      marginTop: '20px', 
                      borderTop: '1px solid #f1f5f9', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between' 
                    }}>
                      <span style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Play size={12} fill="#0284c7" /> Live Hardware Playback
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                        DEMO 0{idx + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Photos Grid — 3 COLUMNS with CONTAIN to prevent zoom and show all parts */}
          {activeTab === 'photos' && (
            <div className="grid-3">
              {photoGallery.map((item, idx) => (
                <div 
                  key={idx} 
                  className="card gallery-photo-card" 
                  style={{ 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onClick={() => setPreviewPhoto(item)}
                >
                  <div style={{
                    height: '280px',
                    backgroundColor: '#0a0f1d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    padding: '14px',
                    background: 'radial-gradient(circle at center, #1e293b 0%, #0a0f1d 100%)'
                  }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.25s ease'
                      }}
                      className="gallery-photo-img"
                    />
                    <div className="photo-hover-badge" style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      pointerEvents: 'none'
                    }}>
                      <Maximize2 size={12} />
                      <span>View Full Photo</span>
                    </div>
                  </div>
                  <div style={{ padding: '16px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span className="badge badge-slate" style={{ marginBottom: '6px', alignSelf: 'flex-start' }}>
                      {item.category}
                    </span>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4, marginTop: 'auto' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Demonstration CTA Bar */}
          <div style={{
            marginTop: '48px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                Schedule an In-Person Depot Demonstration
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                Our field installation technicians can demonstrate camera clarity and DMS drowsiness detection on your actual fleet.
              </p>
            </div>
            <button onClick={() => onOpenOrder && onOpenOrder()} className="btn btn-primary">
              <ShoppingBag size={16} />
              <span>Request On-Site Trial</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Uncropped Full-View Photos */}
      {previewPhoto && (
        <div 
          onClick={() => setPreviewPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#0f172a',
              borderRadius: '16px',
              border: '1px solid #1e293b',
              maxWidth: '900px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid #1e293b'
            }}>
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '4px' }}>
                  {previewPhoto.category}
                </span>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  {previewPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewPhoto(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Complete, Uncut Photo Display */}
            <div style={{
              backgroundColor: '#020617',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '360px',
              maxHeight: '70vh'
            }}>
              <img
                src={previewPhoto.image}
                alt={previewPhoto.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  display: 'block'
                }}
              />
            </div>

            {/* Description footer */}
            <div style={{ padding: '16px 24px', backgroundColor: '#0f172a', borderTop: '1px solid #1e293b' }}>
              <p style={{ margin: 0, fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.5 }}>
                {previewPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-photo-card:hover .gallery-photo-img {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
