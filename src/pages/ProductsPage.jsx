import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, ShoppingBag, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import siteConfig from '../data/siteConfig';

export default function ProductsPage({ onOpenOrder }) {
  const { categorySlug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categorySlug || 'all');

  // Category mapping
  const categoryFilters = [
    { id: 'all', label: 'All Products' },
    { id: 'bus', label: 'Bus & Commercial Dashcams', query: 'bus' },
    { id: 'car', label: 'Car & Light Vehicle Dashcams', query: 'car' },
    { id: 'bike', label: 'Motorcycle Dashcams', query: 'motorcycle' },
    { id: 'dms-adas', label: 'AI DMS & ADAS', query: 'driver monitoring' },
    { id: 'sensors', label: 'Vehicle Sensors & Radar', query: 'sensors' },
    { id: 'storage', label: 'Memory & Storage', query: 'memory' },
    { id: 'accessories', label: 'Accessories & Spares', query: 'accessories' }
  ];

  // If URL changes, sync selected category
  React.useEffect(() => {
    if (categorySlug) {
      setSelectedCategory(categorySlug);
    }
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const title = (product.title || product.name || '').toLowerCase();
      const desc = (product.shortDescription || product.fullDescription || '').toLowerCase();
      const cat = (product.category || '').toLowerCase();
      const query = searchQuery.toLowerCase();

      // Search match
      const matchesSearch = !searchQuery || title.includes(query) || desc.includes(query) || cat.includes(query);

      // Category match
      let matchesCategory = true;
      if (selectedCategory && selectedCategory !== 'all') {
        const filterObj = categoryFilters.find(f => f.id === selectedCategory);
        if (filterObj && filterObj.query) {
          matchesCategory = cat.includes(filterObj.query.toLowerCase()) || 
                            title.includes(filterObj.query.toLowerCase()) ||
                            (selectedCategory === 'dms-adas' && (cat.includes('adas') || cat.includes('dms')));
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="products-page">
      {/* Banner */}
      <section style={{
        backgroundColor: '#0a0f1d',
        color: '#ffffff',
        padding: '56px 0',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">HARDWARE CATALOG</div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Commercial Automotive Safety Equipment
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.0625rem', maxWidth: '680px', lineHeight: 1.5 }}>
            Browse our full range of dual-lens commercial bus black boxes, AI driver monitoring hardware, vehicle radar, and heavy-duty accessories.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ backgroundColor: '#f8fafc', minHeight: '60vh' }}>
        <div className="container">
          {/* Controls Bar: Category Tabs & Search Bar */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            padding: '20px',
            marginBottom: '36px',
            boxShadow: 'var(--shadow-xs)'
          }}>
            {/* Top row: Search input & counter */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '16px',
              borderBottom: '1px solid #f1f5f9',
              paddingBottom: '16px'
            }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
                <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search products by model, sensor, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 38px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.875rem'
                  }}
                />
              </div>

              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                Showing <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> items in catalog
              </div>
            </div>

            {/* Category Badges / Filter Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {categoryFilters.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '6px',
                      fontSize: '0.8125rem',
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? '#0369a1' : '#f1f5f9',
                      color: isActive ? '#ffffff' : '#334155',
                      border: '1px solid',
                      borderColor: isActive ? '#0369a1' : '#e2e8f0',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenOrder={onOpenOrder}
                />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '64px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px dashed #cbd5e1'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                No hardware found matching your criteria
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9375rem', marginBottom: '20px' }}>
                Try adjusting your search query or reset the category filter to view all products.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
