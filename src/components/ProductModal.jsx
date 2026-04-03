import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, ShieldCheck } from 'lucide-react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content glass"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X size={24} /></button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-info">
            <div className="modal-meta">
              <span className="category-tag">{product.category}</span>
              <div className="rating">
                <Star size={16} fill="currentColor" />
                <span>{product.rating}</span>
              </div>
            </div>

            <h2>{product.name}</h2>
            <div className="modal-price">{product.price.toFixed(2)} ₺</div>

            <p className="modal-description">{product.description}</p>

            <div className="modal-benefits">
              <div className="benefit">
                <ShieldCheck size={20} className="text-primary" />
                <span>%100 Organik Garanti</span>
              </div>
              <div className="benefit">
                <ShoppingBag size={20} className="text-primary" />
                <span>Taze Kesim / Toplama</span>
              </div>
            </div>

            <button className="btn btn-primary w-full" onClick={() => {
              onAddToCart(product);
              onClose();
            }}>
              Sepete Ekle <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .modal-content {
          background: var(--white);
          width: 100%;
          max-width: 900px;
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.2);
        }
        .modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 10;
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .modal-close:hover { color: var(--accent); }
        .modal-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .modal-image {
          height: 100%;
          max-height: 500px;
        }
        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-info {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .modal-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--secondary);
        }
        .modal-description {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.1rem;
        }
        .modal-benefits {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .benefit {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 500;
          color: var(--secondary);
        }
        @media (max-width: 800px) {
          .modal-body { grid-template-columns: 1fr; }
          .modal-info { padding: 2rem; }
          .modal-image { max-height: 250px; }
          .modal-price { font-size: 1.5rem; }
          .modal-content { max-width: 95%; margin: 1rem; }
        }
      `}} />
    </div>
  );
};

export default ProductModal;
