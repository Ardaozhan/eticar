import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Sprout, Heart } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Sprout size={32} />,
            title: "100% Doğal Besi",
            desc: "Tavuklarımız GDO'suz, tamamen doğal ve yerli yemlerle beslenir."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Sertifikalı Üretim",
            desc: "Tüm süreçlerimiz gıda güvenliği ve hijyen standartlarına uygundur."
        },
        {
            icon: <Truck size={32} />,
            title: "Günlük Taze Teslimat",
            desc: "Sabah toplanan yumurtalar ve taze kesim etler aynı gün yola çıkar."
        },
        {
            icon: <Heart size={32} />,
            title: "Mutlu Tavuklar",
            desc: "Serbest gezen, gün ışığı alan ve huzurlu bir ortamda yetişen tavuklar."
        }
    ];

    return (
        <section className="features-section container" id="about">
            <div className="section-intro">
                <h2 className="section-title">Neden Biz?</h2>
                <p>Sağlıklı nesiller için protein kaynağınızın en doğal halini sunuyoruz.</p>
            </div>

            <div className="features-grid">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="feature-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="feature-icon">{f.icon}</div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </motion.div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .features-section {
          padding: 8rem 1.5rem;
        }
        .section-intro {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-intro p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-top: 1rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: var(--white);
          padding: 3rem 2rem;
          border-radius: var(--radius-lg);
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-10px);
        }
        .feature-icon {
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }
        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--secondary);
        }
        .feature-card p {
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}} />
        </section>
    );
};

export default Features;
