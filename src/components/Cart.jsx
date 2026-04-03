import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, CheckCircle2, CreditCard, Truck } from 'lucide-react';
import { useState } from 'react';

const Cart = ({ items, onClose, onRemove, onUpdateQuantity, onOrderSuccess }) => {
  const [step, setStep] = useState('bag'); // bag, address, payment, success
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleNextStep = () => {
    if (step === 'bag') setStep('address');
    else if (step === 'address') setStep('payment');
    else if (step === 'payment') {
      setStep('success');
      onOrderSuccess();
    }
  };

  return (
    <div className="cart-overlay-bg" onClick={onClose}>
      <motion.div
        className={`cart-drawer ${step === 'success' ? 'success-drawer' : ''}`}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2>{step === 'bag' ? 'Sepetim' : step === 'address' ? 'Adres Bilgileri' : step === 'payment' ? 'Ödeme' : 'Başarılı!'}</h2>
          <button className="close-cart" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="cart-items-list">
          {step === 'bag' && (
            items.length === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={64} />
                <p>Sepetiniz şu an boş.</p>
                <button className="btn btn-primary" onClick={onClose}>Alışverişe Dön</button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">{item.price.toFixed(2)} ₺</p>
                    <div className="quantity-controls">
                      <button onClick={() => onUpdateQuantity(item.id, -1)}><Minus size={16} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, 1)}><Plus size={16} /></button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => onRemove(item.id)}><Trash2 size={18} /></button>
                </div>
              ))
            )
          )}

          {step === 'address' && (
            <div className="checkout-form">
              <div className="form-group">
                <label>Teslimat Adresi</label>
                <textarea rows="4" placeholder="Açık adresinizi giriniz..."></textarea>
              </div>
              <div className="form-group">
                <label>Telefon Numarası</label>
                <input type="tel" placeholder="05xx xxx xx xx" />
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="checkout-form">
              <div className="payment-options">
                <div className="payment-option active">
                  <CreditCard size={24} />
                  <span>Kredi / Banka Kartı</span>
                </div>
                <div className="payment-option">
                  <Truck size={24} />
                  <span>Kapıda Ödeme</span>
                </div>
              </div>
              <div className="form-group">
                <label>Kart Üzerindeki İsim</label>
                <input type="text" placeholder="AD SOYAD" />
              </div>
              <div className="form-group">
                <label>Kart Numarası</label>
                <input type="text" placeholder="**** **** **** ****" />
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="empty-cart success-state">
              <CheckCircle2 size={80} className="text-success" />
              <h2>Tebrikler!</h2>
              <p>Siparişiniz başarıyla oluşturuldu. En taze ürünlerimiz yola çıkmak için hazırlanıyor.</p>
              <button className="btn btn-primary" onClick={onClose}>Kapat</button>
            </div>
          )}
        </div>

        {step !== 'success' && items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="summary-row">
                <span>Ara Toplam</span>
                <span>{total.toFixed(2)} ₺</span>
              </div>
              <div className="summary-row">
                <span>Teslimat</span>
                <span>Ücretsiz</span>
              </div>
              <div className="summary-total">
                <span>Toplam</span>
                <span>{total.toFixed(2)} ₺</span>
              </div>
            </div>
            <button className="btn btn-primary w-full" onClick={handleNextStep}>
              {step === 'bag' ? 'Siparişi Tamamla' : step === 'address' ? 'Ödemeye Geç' : 'Siparişi Onayla'}
            </button>
            {step !== 'bag' && (
              <button className="btn-back" onClick={() => setStep(step === 'address' ? 'bag' : 'address')}>
                Geri Dön
              </button>
            )}
          </div>
        )}
      </motion.div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .cart-overlay-bg {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2000;
          backdrop-filter: blur(4px);
        }
        .cart-drawer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 450px;
          background: var(--white);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
        }
        .cart-header {
          padding: 1.5rem 2rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cart-header h2 { font-size: 1.5rem; font-weight: 700; }
        .cart-items-list { flex: 1; overflow-y: auto; padding: 2rem; }
        .empty-cart {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 1.5rem;
          color: var(--text-muted);
          text-align: center;
        }
        .cart-item {
          display: flex;
          gap: 1.25rem;
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #f1f5f9;
          align-items: center;
        }
        .cart-item-img { width: 80px; height: 80px; border-radius: 0.75rem; object-fit: cover; }
        .cart-item-info { flex: 1; }
        .cart-item-info h3 { font-size: 1rem; margin-bottom: 0.25rem; }
        .cart-item-price { font-weight: 700; color: var(--primary); margin-bottom: 0.75rem; }
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #f8fafc;
          width: fit-content;
          padding: 0.4rem 0.75rem;
          border-radius: 2rem;
        }
        .quantity-controls button { color: var(--text-muted); display: flex; align-items: center; }
        .quantity-controls span { font-weight: 700; min-width: 20px; text-align: center; }
        .remove-item { color: #cbd5e1; transition: color 0.3s; }
        .remove-item:hover { color: var(--accent); }
        
        .checkout-form { display: flex; flex-direction: column; gap: 1.5rem; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--secondary); }
        .form-group input, .form-group textarea {
          width: 100%; padding: 0.8rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.75rem; font-family: inherit;
        }
        .payment-options { display: flex; gap: 1rem; margin-bottom: 0.5rem; }
        .payment-option {
          flex: 1; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 1rem;
          display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
          cursor: pointer; transition: all 0.3s; font-size: 0.8rem; font-weight: 600;
        }
        .payment-option.active { border-color: var(--primary); background: #fffbeb; color: var(--primary); }
        
        .cart-footer { padding: 2rem; background: #f8fafc; border-top: 1px solid #f1f5f9; }
        .cart-summary { margin-bottom: 1.5rem; }
        .summary-row { display: flex; justify-content: space-between; color: var(--text-muted); margin-bottom: 0.5rem; }
        .summary-total {
          display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem;
          border-top: 1px solid #e2e8f0; font-weight: 800; font-size: 1.25rem; color: var(--secondary);
        }
        .btn-back { width: 100%; margin-top: 1rem; font-weight: 600; color: var(--text-muted); }
        .text-success { color: #22c55e; }
        .w-full { width: 100%; justify-content: center; }

        @media (max-width: 480px) {
          .cart-drawer {
            max-width: 100%;
          }
          .cart-items-list {
            padding: 1.5rem;
          }
          .cart-footer {
            padding: 1.5rem;
          }
          .cart-header {
            padding: 1rem 1.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default Cart;
