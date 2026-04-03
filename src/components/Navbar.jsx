import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, Egg, X } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Egg className="icon-primary" />
          <span className="logo-text">Tavuk<span>Dünyası</span></span>
        </motion.div>

        <ul className="nav-links">
          <li><a href="#">Anasayfa</a></li>
          <li><a href="#shop">Market</a></li>
          <li><a href="#about">Biz Kimiz?</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>

        <div className="nav-actions">
          <motion.button
            className="cart-trigger"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onCartClick}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <motion.span
                className="cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>

          <button className="menu-mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ul className="mobile-nav-links">
              <li><a href="#" onClick={() => setIsMenuOpen(false)}>Anasayfa</a></li>
              <li><a href="#shop" onClick={() => setIsMenuOpen(false)}>Market</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Biz Kimiz?</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>İletişim</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: 800;
          text-decoration: none;
          color: var(--secondary);
          cursor: pointer;
        }
        .icon-primary {
          color: var(--primary);
        }
        .logo-text span {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .cart-trigger {
          position: relative;
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--accent);
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 10px;
          border: 2px solid var(--white);
        }
        .menu-mobile {
          display: none;
          color: var(--secondary);
        }
        .mobile-menu-overlay {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: var(--white);
          padding: 2rem;
          border-bottom: 1px solid #f1f5f9;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 999;
        }
        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
        }
        .mobile-nav-links a {
          text-decoration: none;
          color: var(--secondary);
          font-size: 1.25rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .menu-mobile {
            display: flex;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
