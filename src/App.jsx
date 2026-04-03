import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Facebook, Instagram, Twitter, Phone, Mail, MapPin, ChevronRight, Star, Search } from 'lucide-react';
import { products } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Skeleton from './components/Skeleton';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading for "perfect" feel
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 500);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="app">
            <Navbar
                cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
            />

            <main>
                <Hero />

                <section className="products-section container" id="shop">
                    <div className="section-header">
                        <h2 className="section-title">Ürünlerimiz</h2>

                        <div className="section-controls">
                            <div className="search-wrapper">
                                <Search className="search-icon" size={18} />
                                <input
                                    type="text"
                                    placeholder="Ürün ara..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                            </div>

                            <div className="category-filters">
                                {['all', 'tavuk', 'yumurta'].map(cat => (
                                    <button
                                        key={cat}
                                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat)}
                                    >
                                        {cat === 'all' ? 'Hepsi' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="products-grid">
                        {isLoading ? (
                            [1, 2, 3, 4].map(i => <Skeleton key={i} type="product" />)
                        ) : (
                            filteredProducts.map(product => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToCart={() => addToCart(product)}
                                    onShowDetails={() => setSelectedProduct(product)}
                                />
                            ))
                        )}
                        {!isLoading && filteredProducts.length === 0 && (
                            <div className="no-results">
                                <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
                            </div>
                        )}
                    </div>
                </section>

                <Features />

                <Contact />
            </main>

            <Footer />

            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        className="back-to-top"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <ChevronRight style={{ transform: 'rotate(-90deg)' }} />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isCartOpen && (
                    <Cart
                        items={cartItems}
                        onClose={() => setIsCartOpen(false)}
                        onOrderSuccess={() => setCartItems([])}
                        onRemove={removeFromCart}
                        onUpdateQuantity={updateQuantity}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        onAddToCart={addToCart}
                    />
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        .products-section {
          padding: 8rem 1.5rem;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary);
        }
        .section-controls {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .search-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
        }
        .search-input {
          padding: 0.75rem 1rem 0.75rem 2.8rem;
          border-radius: 2rem;
          border: 1px solid #e2e8f0;
          outline: none;
          width: 250px;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .search-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
          width: 300px;
        }
        .category-filters {
          display: flex;
          gap: 0.75rem;
        }
        .filter-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 2rem;
          border: 1px solid #e2e8f0;
          font-weight: 600;
          transition: all 0.3s ease;
          background: var(--white);
          color: var(--text-muted);
        }
        .filter-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--white);
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.2);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 3rem;
          min-height: 400px;
        }
        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem;
          color: var(--text-muted);
          font-size: 1.2rem;
        }
        .back-to-top {
          position: fixed;
          bottom: 2.5rem;
          right: 2.5rem;
          width: 55px;
          height: 55px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.4);
          z-index: 100;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .products-section { padding: 4rem 1.5rem; }
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .section-controls {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }
          .search-input {
            width: 100%;
          }
          .search-input:focus {
            width: 100%;
          }
          .category-filters {
            overflow-x: auto;
            padding-bottom: 0.5rem;
            width: 100%;
          }
          .filter-btn {
            white-space: nowrap;
          }
          .section-title {
            font-size: 1.75rem;
          }
          .back-to-top {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 45px;
            height: 45px;
          }
        }
      `}} />
        </div>
    );
}

export default App;
