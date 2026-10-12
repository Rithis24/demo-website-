import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Star,
  Play,
  Truck,
  Car,
  Bus,
  Bike,
  Activity,
  Radio,
  HardDrive,
  Wrench,
  Check,
  Award,
  Video,
  Layers,
  Cpu,
  MapPin
} from 'lucide-react';
import CertificateModal from '../components/CertificateModal';
import siteConfig from '../data/siteConfig';
import productsData from '../data/products.json';

export default function HomePage({ onOpenOrder }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeVideo, setActiveVideo] = useState(0);

  // Top featured products from verified productsData
  const featuredProducts = [
    productsData.find(p => p.slug === 'mb-bus-black-box-smart') || productsData[0],
    productsData.find(p => p.slug === 'mb-black-box-dms') || productsData[1],
    productsData.find(p => p.slug === 'mb-bus-black-box-t4') || productsData[2],
    productsData.find(p => p.slug === 'mb-car-black-box-smart') || productsData[3],
    productsData.find(p => p.slug === 'mb-bike-black-box-smart') || productsData[4],
    productsData.find(p => p.slug === 'bus-and-truck-parking-sensors') || productsData[5]
  ];

  // Primary highlight product for New Arrivals
  const spotlightProduct = productsData.find(p => p.slug === 'mb-black-box-dms') || productsData[0];

  return (
    <div className="home-page" style={{ backgroundColor: '#ffffff' }}>
      {/* =========================================================================
          01 — HERO (Large Cinematic, Minimal, Powerful)
          ========================================================================= */}
      <section className="hero-editorial">
        <div className="hero-editorial-backdrop" />

        <div className="container">
          <div className="hero-editorial-content">
            {/* Small Eyebrow */}
            <div className="hero-eyebrow">
              MB AUTOMOTIVES INDIA
            </div>

            {/* Large Headline */}
            <h1 className="hero-headline">
              Engineering Safer Journeys.
            </h1>

            {/* Supporting Text */}
            <p className="hero-supporting">
              Advanced vehicle safety and fleet technology built for modern mobility.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-accent btn-lg">
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — PRODUCT CATEGORIES (Immediate Brand & Product Scope)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">PRODUCT PORTFOLIO</span>
            <h2 className="section-title">Comprehensive Fleet Safety Hardware</h2>
            <p className="section-subtitle">
              Engineered hardware systems designed for commercial buses, transport trucks, passenger fleets, and two-wheelers.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {siteConfig.categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className="category-card"
              >
                <div className="category-card-media">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <h3 className="category-card-title">{cat.name}</h3>
                <p className="category-card-desc">{cat.desc}</p>
                <div className="category-card-footer">
                  <span>Explore Category</span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — FEATURED PRODUCTS (Premium Product Showcase)
          ========================================================================= */}
      <section className="section section-subtle">
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <span className="section-eyebrow">FLAGSHIP HARDWARE</span>
              <h2 className="section-title" style={{ margin: 0 }}>Featured Fleet Systems</h2>
            </div>
            <Link to="/products" className="btn btn-secondary">
              <span>View All Hardware</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="product-showcase-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-showcase-card">
                <div className="product-showcase-media">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="product-showcase-category">
                  {product.category}
                </div>

                <h3 className="product-showcase-title">
                  {product.title}
                </h3>

                <p className="product-showcase-desc">
                  {product.shortDescription || product.fullDescription || 'Commercial vehicle safety hardware engineered for rigorous fleet operating conditions.'}
                </p>

                {/* Important verified specification */}
                <div>
                  <span className="product-spec-badge">
                    {product.slug === 'mb-bus-black-box-smart'
                      ? '10.1" Touch • 4G LTE Telematics'
                      : product.slug === 'mb-bus-black-box-t4'
                        ? '4-Channel MDVR • Aviation Lock'
                        : product.slug?.includes('dms')
                          ? 'AI Facial Fatigue Engine'
                          : product.slug?.includes('sensor') || product.slug?.includes('parking')
                            ? 'IP68 Ultrasonic Proximity Radar'
                            : product.slug?.includes('bike')
                              ? 'IP67 Waterproof Two-Wheeler'
                              : product.slug?.includes('car')
                                ? 'Dual HD • Emergency G-Sensor'
                                : 'Dual 1080P • 9V–36V Clamping'}
                  </span>
                </div>

                {/* Actions */}
                <div className="product-showcase-actions">
                  <Link
                    to={`/product/${product.slug}`}
                    className="btn btn-secondary btn-sm"
                    style={{ flexGrow: 1 }}
                  >
                    <span>View Product</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <button
                    onClick={() => onOpenOrder && onOpenOrder({ title: product.title })}
                    className="btn btn-primary btn-sm"
                  >
                    <ShoppingBag size={14} />
                    <span>Place an Order</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — PRODUCT TECHNOLOGY / ENGINEERING (ENGINEERED FOR REAL VEHICLES)
          ========================================================================= */}
      <section className="engineering-section">
        <div className="container">
          <div className="engineering-grid">
            {/* Left: Large Verified Engineering Photography */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: '#090d16'
              }}>
                <img
                  src="/assets/branding/about-hero-image.png"
                  alt="MB Automotives Engineering and Rigorous Hardware Testing"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Right: Technical Explanation */}
            <div>
              <span className="section-eyebrow section-eyebrow-dark">
                PRECISION SPECIFICATIONS
              </span>
              <h2 className="section-title section-title-dark" style={{ marginBottom: '16px' }}>
                ENGINEERED FOR REAL VEHICLES.
              </h2>
              <p className="section-subtitle section-subtitle-dark" style={{ marginBottom: '28px' }}>
                Indian commercial transit presents demanding operating conditions: intense windshield sun radiation, heavy diesel alternator voltage fluctuations, and continuous pothole shocks. MB Automotives hardware is built from component-level up to operate without failure.
              </p>

              <div className="engineering-feature-list">
                <div className="engineering-feature-item">
                  <div className="engineering-feature-num">01</div>
                  <div>
                    <h3 className="engineering-feature-title">Dual Supercapacitor Architecture</h3>
                    <p className="engineering-feature-desc">
                      Replaces volatile lithium-ion batteries. Supercapacitors operate reliably up to 75°C under direct windshield sunlight with zero swell, leak, or fire hazard.
                    </p>
                  </div>
                </div>

                <div className="engineering-feature-item">
                  <div className="engineering-feature-num">02</div>
                  <div>
                    <h3 className="engineering-feature-title">DC 9V–36V Transient Voltage Clamping</h3>
                    <p className="engineering-feature-desc">
                      Heavy commercial 24V bus alternators produce severe voltage spikes during starter turnover. Built-in industrial transient suppression clamps overvoltage safely.
                    </p>
                  </div>
                </div>

                <div className="engineering-feature-item">
                  <div className="engineering-feature-num">03</div>
                  <div>
                    <h3 className="engineering-feature-title">Threaded 4-Pin Metal Aviation Connections</h3>
                    <p className="engineering-feature-desc">
                      Flimsy USB-C or micro-USB plugs disconnect under heavy engine vibration. Threaded metal screw-lock aviation couplings ensure unbroken signal and power transmission.
                    </p>
                  </div>
                </div>

                <div className="engineering-feature-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                  <div className="engineering-feature-num">04</div>
                  <div>
                    <h3 className="engineering-feature-title">Synchronized Dual-Lens Loop Protection</h3>
                    <p className="engineering-feature-desc">
                      Synchronous road and cabin recording with G-Sensor shock detection write-protecting collision clips automatically into read-only partitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — PRODUCT EXPERIENCE (Visual Storytelling)
          ========================================================================= */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">THE MB EXPERIENCE</span>
            <h2 className="section-title">From Factory Bench to Highway Miles</h2>
            <p className="section-subtitle">
              How our integrated hardware and software safeguards commercial drivers, passengers, and fleet operators on every route.
            </p>
          </div>

          <div className="experience-story-grid">
            <div className="experience-step-card">
              <div className="experience-step-number">STEP 01</div>
              <h3 className="experience-step-title">Hardware Installation</h3>
              <p className="experience-step-desc">
                Secure windshield mounting with tamper-resistant brackets and threaded 4-pin aviation power cables tied cleanly into the vehicle harness.
              </p>
            </div>

            <div className="experience-step-card">
              <div className="experience-step-number">STEP 02</div>
              <h3 className="experience-step-title">Synchronized Dual Stream</h3>
              <p className="experience-step-desc">
                Starlight wide-angle optics continuously capture high-resolution forward road conditions while an interior lens monitors cabin safety.
              </p>
            </div>

            <div className="experience-step-card">
              <div className="experience-step-number">STEP 03</div>
              <h3 className="experience-step-title">Active AI Vigilance</h3>
              <p className="experience-step-desc">
                Embedded Driver Monitoring Systems (DMS) analyze eye blink patterns and head angles, alerting drivers to fatigue before accidents occur.
              </p>
            </div>

            <div className="experience-step-card">
              <div className="experience-step-number">STEP 04</div>
              <h3 className="experience-step-title">Indisputable Evidence</h3>
              <p className="experience-step-desc">
                In incident scenarios, the 3-axis G-sensor locks incident footage immediately, providing tamper-proof evidence for insurance and authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — NEW ARRIVALS (Large Editorial Product Spotlight)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="new-arrival-banner">
            <div>
              <span style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#38bdf8',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>
                NEW ARRIVAL • AI SAFETY TELEMATICS
              </span>

              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                marginBottom: '16px'
              }}>
                {spotlightProduct.title}
              </h2>

              <p style={{
                fontSize: '1.0625rem',
                color: '#cbd5e1',
                lineHeight: 1.6,
                marginBottom: '28px',
                maxWidth: '520px'
              }}>
                {spotlightProduct.shortDescription || spotlightProduct.fullDescription || 'On-device neural vision Driver Monitoring System (DMS) detecting fatigue, eye closure, and distraction in real-time.'}
              </p>

              {/* Verified Features */}
              <div className="new-arrival-features-grid">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                  <Check size={16} color="#38bdf8" />
                  <span>Real-time Eye Closure Tracking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                  <Check size={16} color="#38bdf8" />
                  <span>In-Cabin Audio Fatigue Alarm</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                  <Check size={16} color="#38bdf8" />
                  <span>Distraction & Phone Detection</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.875rem' }}>
                  <Check size={16} color="#38bdf8" />
                  <span>Infrared Low-Light Operation</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  to={`/product/${spotlightProduct.slug}`}
                  className="btn btn-accent btn-lg"
                >
                  <span>View Product Details</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => onOpenOrder && onOpenOrder({ title: spotlightProduct.title })}
                  className="btn btn-outline-white btn-lg"
                >
                  <ShoppingBag size={16} />
                  <span>Place an Order</span>
                </button>
              </div>
            </div>

            {/* Product Photography */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <img
                src={spotlightProduct.image}
                alt={spotlightProduct.title}
                style={{ maxHeight: '320px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08 — TRUST / CREDENTIALS (Certificates, Reviews & Partners)
          ========================================================================= */}
      <section className="section section-subtle">
        <div className="container">
          {/* Government Accreditations & Quality Standards */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              GOVERNMENT ACCREDITATIONS & QUALITY STANDARDS
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              rowGap: '20px',
              flexWrap: 'wrap'
            }}>
              {siteConfig.certificateBadges.map((badge, bIdx) => {
                const matchingCert = siteConfig.certificatesList.find(c => c.id === badge.certId || c.id === badge.id);
                return (
                  <div
                    key={bIdx}
                    onClick={() => matchingCert && setSelectedCert(matchingCert)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      flexShrink: 0,
                      cursor: matchingCert ? 'pointer' : 'default',
                      transition: 'transform 0.2s ease'
                    }}
                    title={matchingCert ? `Click to view ${badge.name} certification document` : badge.name}
                  >
                    {badge.logo ? (
                      <div style={{
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <img
                          src={badge.logo}
                          alt={badge.name}
                          style={{
                            height: '32px',
                            maxWidth: badge.id === 'make-in-india' ? '64px' : '36px',
                            width: 'auto',
                            objectFit: 'contain',
                            display: 'block',
                            filter: 'grayscale(100%) opacity(70%)',
                            transition: 'filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'grayscale(0%) opacity(100%)';
                            e.currentTarget.style.transform = 'scale(1.06)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'grayscale(100%) opacity(70%)';
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        />
                      </div>
                    ) : null}
                    <span style={{
                      fontWeight: 700,
                      color: '#475569',
                      fontSize: '0.9375rem',
                      whiteSpace: 'nowrap',
                      lineHeight: 1,
                      userSelect: 'none'
                    }}>
                      {badge.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: 'center', marginTop: '28px' }}>
              <Link to="/certificates" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>View All Certificates & Accreditations</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Verified Customer Reviews */}
          <div style={{ marginBottom: '64px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '28px' }}>
              Verified Fleet Operator Feedback
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {siteConfig.testimonials.slice(0, 3).map((review) => (
                <div
                  key={review.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '14px' }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#f59e0b" />
                      ))}
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: '#334155', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px' }}>
                      "{review.content}"
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.9375rem' }}>
                      {review.name}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      {review.role} • {review.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner OEM Body Builders */}
          <div>
            <div style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              TRUSTED PARTNER INTEGRATIONS
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '36px',
              rowGap: '20px',
              flexWrap: 'wrap'
            }}>
              {siteConfig.channelPartners.slice(0, 6).map((partner, pIdx) => (
                <div key={pIdx} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      style={{
                        maxHeight: '32px',
                        width: 'auto',
                        filter: 'grayscale(100%) opacity(70%)',
                        transition: 'filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = 'grayscale(0%) opacity(100%)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = 'grayscale(100%) opacity(70%)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  ) : null}
                  <span style={{ fontWeight: 700, color: '#475569', fontSize: '0.9375rem', whiteSpace: 'nowrap', lineHeight: 1 }}>
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '28px' }}>
              <Link to="/partners" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>View All Channel Partners & OEM Collaborations</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          09 — VIDEO / REAL-WORLD USE (Hardware Demonstration)
          ========================================================================= */}
      <section className="section-dark section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow section-eyebrow-dark">FIELD TESTING</span>
            <h2 className="section-title section-title-dark">Hardware Operating in Real Vehicles</h2>
            <p className="section-subtitle section-subtitle-dark">
              Examine live road footage and in-cabin alert performance captured on heavy transit routes.
            </p>
          </div>

          <div className="video-showcase-grid">
            {/* Cinematic Video Player */}
            <div className="video-cinematic-box">
              <video
                key={activeVideo}
                controls
                poster="/assets/branding/about-hero-image.png"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              >
                <source src={siteConfig.videos[activeVideo]?.src} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>

            {/* Video List & Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {siteConfig.videos.map((vid, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveVideo(idx)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '12px',
                    border: activeVideo === idx ? '1px solid #0284c7' : '1px solid rgba(255, 255, 255, 0.1)',
                    backgroundColor: activeVideo === idx ? 'rgba(2, 132, 199, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <Play size={16} color={activeVideo === idx ? '#38bdf8' : '#94a3b8'} />
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 600 }}>
                      DEMO 0{idx + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    {vid.title}
                  </h3>
                </div>
              ))}

              <div style={{ marginTop: '12px' }}>
                <Link to="/gallery" className="btn btn-outline-white">
                  <span>WATCH DEMONSTRATION GALLERY</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10 — ABOUT THE COMPANY (Authentic Background & Locations)
          ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="about-grid">
            {/* Visual */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: 'var(--shadow-md)'
            }}>
              <img
                src="/assets/branding/about-hero-image.png"
                alt="MB Automotives Manufacturing Center"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            {/* Story */}
            <div>
              <span className="section-eyebrow">MANUFACTURING & PRESENCE</span>
              <h2 className="section-title">
                Commercial Telematics Built in Tamil Nadu
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
                MB Automotives India (A Unit of Metro Basket) is an established commercial telematics and vehicle safety hardware manufacturer headquartered in Kotagiri, Tamil Nadu, with regional operations based in Guindy, Chennai.
              </p>
              <p style={{ color: '#475569', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '28px' }}>
                With dedicated engineering capabilities, our manufacturing facility specializes in hardware assemblies designed specifically for commercial bus bodies, freight trucks, and heavy transit operations across India.
              </p>

              {/* Verified Locations Strip */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: '#0f172a' }}>Headquarters & Registered Facility:</strong>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      14/145, Niton Estate, Club Road, Kotagiri, Tamil Nadu - 643217
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={18} color="#0284c7" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ fontSize: '0.875rem', color: '#0f172a' }}>Regional Operations Base:</strong>
                    <div style={{ fontSize: '0.8125rem', color: '#64748b' }}>
                      Industrial Corridor, Guindy, Chennai, Tamil Nadu - 600032
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Link to="/about" className="btn btn-secondary">
                  <span>Read More About Our Company</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11 — CONTACT / B2B CTA (Let's Equip Your Fleet)
          ========================================================================= */}
      <section className="b2b-cta-section">
        <div className="container">
          <div className="b2b-cta-card">
            <div>
              <span style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#38bdf8',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                B2B FLEET PROCUREMENT
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                Let's Equip Your Fleet.
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '600px', lineHeight: 1.55 }}>
                Connect directly with MB Automotives India for product specifications, bulk commercial fleet requirements, custom aviation cable lengths, or dealership inquiries.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                <span>CONTACT US</span>
              </Link>
              <button
                onClick={() => onOpenOrder && onOpenOrder()}
                className="btn btn-accent btn-lg"
              >
                <ShoppingBag size={18} />
                <span>PLACE AN ORDER</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        certificate={selectedCert}
      />
    </div>
  );
}
