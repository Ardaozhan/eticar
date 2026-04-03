import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Egg } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Egg className="icon-primary" />
            <span className="logo-text">Tavuk<span>Dünyası</span></span>
          </div>
          <p>Çiftliğimizden sofranıza uzanan, en taze ve en doğal lezzetlerin adresi. Sağlığınız için doğal beslenmeyi önemsiyoruz.</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Kurumsal</h4>
          <ul>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">Çiftliğimiz</a></li>
            <li><a href="#">Sertifikalarımız</a></li>
            <li><a href="#">Kariyer</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Müşteri Hizmetleri</h4>
          <ul>
            <li><a href="#">Sıkça Sorulan Sorular</a></li>
            <li><a href="#">Teslimat ve İade</a></li>
            <li><a href="#">Mesafeli Satış Sözleşmesi</a></li>
            <li><a href="#">Gizlilik Politikası</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>İletişim</h4>
          <div className="contact-item">
            <MapPin size={20} />
            <span>Köyceğiz Mah. Tavuk Çiftliği Sk. No:45 Bolu, Türkiye</span>
          </div>
          <div className="contact-item">
            <Phone size={20} />
            <span>0850 123 45 67</span>
          </div>
          <div className="contact-item">
            <Mail size={20} />
            <span>info@tavukdunyasi.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Tavuk Dünyası. Tüm Hakları Saklıdır.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: var(--secondary);
          color: white;
          padding: 5rem 0 0;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 4rem;
          padding-bottom: 5rem;
        }
        .footer-brand p {
          color: #94a3b8;
          margin: 1.5rem 0 2rem;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        .social-links a {
          color: white;
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: var(--primary);
        }
        .footer-links h4, .footer-contact h4 {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          position: relative;
        }
        .footer-links h4::after, .footer-contact h4::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.5rem;
          width: 30px;
          height: 2px;
          background: var(--primary);
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s;
        }
        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }
        .contact-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: #94a3b8;
        }
        .contact-item svg {
          color: var(--primary);
          flex-shrink: 0;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem 0;
          text-align: center;
          color: #64748b;
          font-size: 0.875rem;
        }
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-brand p {
            margin-left: auto;
            margin-right: auto;
          }
          .social-links {
            justify-content: center;
          }
          .footer-links h4::after, .footer-contact h4::after {
            left: 50%;
            transform: translateX(-50%);
          }
          .contact-item {
            justify-content: center;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
