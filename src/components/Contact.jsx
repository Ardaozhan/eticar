import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="contact-section container" id="contact">
            <div className="contact-card glass">
                <div className="contact-info">
                    <h2>Bizimle İletişime Geçin</h2>
                    <p>Her türlü soru, görüş ve toplu sipariş talepleriniz için bize yazabilirsiniz.</p>

                    <div className="info-items">
                        <div className="info-item">
                            <MapPin className="text-primary" />
                            <div>
                                <h4>Adres</h4>
                                <p>Bolu Organik Çiftliği, Merkez/Bolu</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone className="text-primary" />
                            <div>
                                <h4>Telefon</h4>
                                <p>+90 (850) 123 45 67</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail className="text-primary" />
                            <div>
                                <h4>E-posta</h4>
                                <p>destek@tavukdunyasi.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input type="text" placeholder="Adınız Soyadınız" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="E-posta Adresiniz" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Mesajınız" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Gönder <Send size={18} />
                    </button>
                </form>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .contact-section {
          padding: 8rem 1.5rem;
        }
        .contact-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .contact-info {
          background: var(--secondary);
          color: white;
          padding: 4rem;
        }
        .contact-info h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .contact-info p {
          color: #94a3b8;
          margin-bottom: 3rem;
        }
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .info-item h4 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .info-item p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }
        .text-primary {
          color: var(--primary);
        }
        .contact-form {
          background: var(--white);
          padding: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius);
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
        }
        @media (max-width: 900px) {
          .contact-card {
            grid-template-columns: 1fr;
          }
          .contact-info, .contact-form {
            padding: 3rem 2rem;
          }
        }
      `}} />
        </section>
    );
};

export default Contact;
