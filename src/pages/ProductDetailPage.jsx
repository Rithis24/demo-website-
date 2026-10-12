import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Check, 
  FileText, 
  Download, 
  Share2, 
  CheckCircle,
  Truck,
  Phone
} from 'lucide-react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage({ onOpenOrder }) {
  const { productId } = useParams();

  // Find product by slug or id
  const product = productsData.find(
    (p) => String(p.slug) === String(productId) || String(p.id) === String(productId)
  ) || productsData[0];

  const galleryImages = (product.gallery && product.gallery.length > 0) 
    ? product.gallery 
    : [product.thumbnail || product.image];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  // Related products from same category
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const title = product.title || product.name;

  return (
    <div className="product-detail-page">
      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', color: '#64748b' }}>
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#0369a1', fontWeight: 600 }}>
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span style={{ color: '#0f172a', fontWeight: 600 }}>{title}</span>
        </div>
      </div>

      {/* Main Spec & Showcase Section */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '40px' }}>
        <div className="container">
          <div className="product-detail-grid">
            {/* Left: Gallery & Visual Stage */}
            <div>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '40px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '380px',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '16px'
              }}>
                <img
                  src={activeImage}
                  alt={title}
                  style={{
                    maxHeight: '320px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    transition: 'all 0.2s ease'
                  }}
                />
              </div>

              {/* Thumbnails row */}
              {galleryImages.length > 1 && (
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '8px',
                        border: '2px solid',
                        borderColor: activeImage === img ? '#0369a1' : '#e2e8f0',
                        padding: '6px',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer'
                      }}
                    >
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </button>
                  ))}
                </div>
              )}

              {/* Quality & Compliance Assurance Box */}
              <div style={{
                marginTop: '32px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#0f172a' }}>
                  Automotive Grade Hardware Assurance
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: '#475569' }}>
                  <span style={{ color: '#0369a1', fontWeight: 700 }}>•</span>
                  <span>Dual supercapacitors engineered for high-temperature windshield endurance</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.8125rem', color: '#475569' }}>
                  <span style={{ color: '#0369a1', fontWeight: 700 }}>•</span>
                  <span>Direct factory dispatch with warranty coverage & B2B GST tax invoice</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Information & Order Action */}
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span className="badge badge-blue">{product.category}</span>
                <span className="badge badge-amber">Commercial Grade</span>
                <span className="badge badge-success">In Stock & Ready</span>
              </div>

              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', lineHeight: 1.25 }}>
                {title}
              </h1>

              <div style={{
                fontSize: '0.875rem',
                fontFamily: 'var(--font-mono)',
                color: '#64748b',
                marginBottom: '20px'
              }}>
                PART ID / MODEL: {product.slug?.toUpperCase() || `MB-${product.id}`}
              </div>

              <p style={{
                fontSize: '1rem',
                color: '#334155',
                lineHeight: 1.6,
                marginBottom: '28px',
                borderBottom: '1px solid #f1f5f9',
                paddingBottom: '20px'
              }}>
                {product.fullDescription || product.shortDescription}
              </p>

              {/* B2B Action Bar */}
              <div style={{
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '32px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0369a1', textTransform: 'uppercase' }}>
                      Commercial Trade Pricing
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                      Dealer & Fleet Order Request
                    </div>
                  </div>
                  <span className="badge badge-slate" style={{ fontSize: '0.75rem' }}>
                    GST Invoice Available
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => onOpenOrder && onOpenOrder(product)}
                    className="btn btn-primary btn-lg"
                    style={{ flex: 1, minWidth: '200px' }}
                  >
                    <ShoppingBag size={18} />
                    <span>Place an Order</span>
                  </button>
                  <a
                    href="tel:+918489880444"
                    className="btn btn-secondary btn-lg"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Phone size={16} />
                    <span>Call Sales</span>
                  </a>
                </div>

                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '12px' }}>
                  * No instant online payment required. Our sales team contacts you with wholesale tier pricing and dispatch scheduling.
                </div>
              </div>

              {/* Features List */}
              {product.features && product.features.length > 0 && (
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>
                    Key Performance Highlights
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {product.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle size={16} color="#0369a1" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.5 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Table */}
              {product.specs && Object.keys(product.specs).length > 0 && (
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>
                    Technical Specifications
                  </h3>
                  <div style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    {Object.entries(product.specs).map(([key, val], idx) => (
                      <div
                        key={key}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1.4fr',
                          padding: '10px 16px',
                          fontSize: '0.8125rem',
                          backgroundColor: idx % 2 === 0 ? '#f8fafc' : '#ffffff',
                          borderBottom: idx === Object.keys(product.specs).length - 1 ? 'none' : '1px solid #f1f5f9'
                        }}
                      >
                        <span style={{ fontWeight: 600, color: '#64748b' }}>{key}</span>
                        <span style={{ fontWeight: 600, color: '#0f172a' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <div>
                  <div className="eyebrow">COMPATIBLE HARDWARE</div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
                    Related Equipment in {product.category}
                  </h2>
                </div>
                <Link to="/products" className="btn btn-secondary btn-sm">
                  View Full Catalog
                </Link>
              </div>

              <div className="grid-3">
                {relatedProducts.map((relProduct) => (
                  <ProductCard
                    key={relProduct.id}
                    product={relProduct}
                    onOpenOrder={onOpenOrder}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
