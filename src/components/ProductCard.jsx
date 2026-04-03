import { motion } from 'framer-motion';
import { Star, Plus, Eye } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onShowDetails }) => {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="card-image-wrapper" onClick={onShowDetails}>
        <img src={product.image} alt={product.name} />
        <div className="card-overlay">
          <button className="btn-icon" onClick={(e) => {
            e.stopPropagation();
            onShowDetails();
          }}><Eye size={20} /></button>
          <button className="btn-icon" onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}><Plus size={20} /></button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-meta">
          <span className="category-tag">{product.category}</span>
          <div className="rating">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        <h3 className="product-name" onClick={onShowDetails}>{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">{product.price.toFixed(2)} ₺</span>
          <button className="add-btn" onClick={onAddToCart}>
            <Plus size={18} />
            Ekle
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .product-card {
          background: var(--white);
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
        }
        .card-image-wrapper {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          cursor: pointer;
        }
        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover img {
          transform: scale(1.1);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .product-card:hover .card-overlay {
          opacity: 1;
        }
        .btn-icon {
          background: var(--white);
          color: var(--secondary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .btn-icon:hover {
          background: var(--primary);
          color: var(--white);
          transform: scale(1.1);
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .category-tag {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 0.05em;
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
          font-size: 0.875rem;
          color: #eab308;
        }
        .product-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--secondary);
          margin-bottom: 0.5rem;
          cursor: pointer;
        }
        .product-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .product-price {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--secondary);
        }
        .add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f8fafc;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          font-weight: 600;
          color: var(--secondary);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        .add-btn:hover {
          background: var(--primary);
          color: var(--white);
          border-color: var(--primary);
        }
      `}} />
    </motion.div>
  );
};

export default ProductCard;
