import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import MbEmblem from './MbEmblem';
import siteConfig from '../data/siteConfig';

export default function Footer({ onOpenOrder }) {
  return (
    <footer style={{ backgroundColor: '#0a0f1d', color: '#94a3b8', borderTop: '1px solid #1e293b' }}>
      {/* Main Footer Content */}
      <div className="container" style={{ padding: 'clamp(40px, 6vw, 64px) clamp(16px, 3.5vw, 24px) 48px clamp(16px, 3.5vw, 24px)' }}>
        <div className="footer-main-grid">
          {/* Column 1: Company Profile */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <MbEmblem size={40} />
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.125rem', letterSpacing: '-0.01em' }}>
                  MB AUTOMOTIVES INDIA
                </div>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>
                  A Unit of Metro Basket
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '20px' }}>
              Manufacturer of commercial bus black boxes, AI driver monitoring systems (DMS), ADAS safety cameras, and high-precision vehicle radar engineered for rigorous Indian road logistics.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="badge badge-blue">ISO 9001:2015</span>
              <span className="badge badge-amber">MSME Udyam</span>
              <span className="badge badge-slate">Made in India</span>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Product Categories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li>
                <Link to="/products/bus" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#0284c7" /> Bus & Commercial Dashcams
                </Link>
              </li>
              <li>
                <Link to="/products/car" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#0284c7" /> Car Black Box Smart
                </Link>
              </li>
              <li>
                <Link to="/products/bike" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#0284c7" /> Motorcycle Dashcams
                </Link>
              </li>
              <li>
                <Link to="/products/dms-adas" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#0284c7" /> AI DMS & Forward ADAS
                </Link>
              </li>
              <li>
                <Link to="/products/sensors" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#0284c7" /> Vehicle Sensors & Radar
                </Link>
              </li>
              <li>
                <Link to="/products/storage" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#0284c7" /> High-Endurance Memory Cards
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={14} color="#0284c7" /> Aviation Cables & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Corporate Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><Link to="/about" style={{ color: '#94a3b8' }}>About MB Automotives</Link></li>
              <li><Link to="/certificates" style={{ color: '#94a3b8' }}>Certificates & Accreditations</Link></li>
              <li><Link to="/partners" style={{ color: '#94a3b8' }}>Channel Partners & OEM Collaborations</Link></li>
              <li><Link to="/downloads" style={{ color: '#94a3b8' }}>Product Catalogues (PDF)</Link></li>
              <li><Link to="/downloads" style={{ color: '#94a3b8' }}>Software & Mobile APKs</Link></li>
              <li><Link to="/gallery" style={{ color: '#94a3b8' }}>In-Vehicle Video Demonstrations</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8' }}>Contact & Regional Facilities</Link></li>
              <li>
                <a 
                  href="/assets/docs/MB-Catalogue.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  Download Catalogue <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Facilities & Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.9375rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '18px' }}>
              Facilities & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Headquarters & Facility:</strong>
                  <div style={{ color: '#94a3b8' }}>14/145, Niton Estate, Club Road, Kotagiri - 643217, The Nilgiris, Tamil Nadu</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Regional Base:</strong>
                  <div style={{ color: '#94a3b8' }}>Industrial Corridor, Guindy, Chennai - 600032</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <div>
                  <a href="tel:+918489880444" style={{ color: '#ffffff', fontWeight: 600 }}>+91-8489880444</a> / 
                  <a href="tel:+918220955966" style={{ color: '#ffffff', fontWeight: 600, marginLeft: '4px' }}>+91-8220955966</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href="mailto:metrobasketin@gmail.com" style={{ color: '#94a3b8' }}>metrobasketin@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & B2B Notice */}
        <div style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          flexDirection: 'column',
          mdFlexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.8125rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} MB Automotives India (A Unit of Metro Basket). All rights reserved.
          </div>
          <div>
            Commercial Fleet Safety & Telematics Hardware • Design Prototype Demo
          </div>
        </div>
      </div>
    </footer>
  );
}
