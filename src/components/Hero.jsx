import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-badge">Taze & Doğal</span>
          <h1>Doğanın En Taze <span>Tavuk ve Yumurtaları</span> Soframızda.</h1>
          <p>Köyümüzün taptaze havasıyla, tamamen doğal yollarla yetişen tavuklarımızdan elde edilen ürünleri güvenle tüketebilirsiniz.</p>

          <div className="hero-cta">
            <a href="#shop" className="btn btn-primary">Hemen Alışverişe Başla <ArrowRight size={20} /></a>
            <div className="trust-points">
              <div className="point"><CheckCircle size={16} /> 100% Organik</div>
              <div className="point"><CheckCircle size={16} /> Hızlı Teslimat</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-overlay"></div>
          <img src="/assets/hero.png" alt="Doğal Tavuk Çiftliği" />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          padding: 10rem 0 5rem;
          background: linear-gradient(135deg, #fff 0%, #fff7ed 100%);
          overflow: hidden;
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
        }
        .hero-badge {
          background: #ffedd5;
          color: #9a3412;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 0.875rem;
          display: inline-block;
          margin-bottom: 1.5rem;
        }
        .hero-text h1 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--secondary);
        }
        .hero-text h1 span {
          color: var(--primary);
        }
        .hero-text p {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-cta {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .trust-points {
          display: flex;
          gap: 2rem;
        }
        .point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.9rem;
        }
        .point svg {
          color: #22c55e;
        }
        .hero-image {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(245, 158, 11, 0.1), transparent);
        }
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text h1 {
            font-size: 3rem;
          }
          .hero-text p {
            margin: 0 auto 2.5rem;
          }
          .hero-cta {
            align-items: center;
          }
          .trust-points {
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .hero-text h1 {
            font-size: 2.25rem;
          }
          .hero-text p {
            font-size: 1.1rem;
          }
          .trust-points {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
