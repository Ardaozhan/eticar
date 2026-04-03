const Skeleton = ({ type }) => {
    if (type === 'product') {
        return (
            <div className="skeleton-card">
                <div className="skeleton-image shunt"></div>
                <div className="skeleton-content">
                    <div className="skeleton-line short shunt"></div>
                    <div className="skeleton-line medium shunt"></div>
                    <div className="skeleton-line long shunt"></div>
                    <div className="skeleton-footer">
                        <div className="skeleton-line short shunt"></div>
                        <div className="skeleton-btn shunt"></div>
                    </div>
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
          .skeleton-card {
            background: #fff;
            border-radius: var(--radius);
            overflow: hidden;
            border: 1px solid #f1f5f9;
          }
          .skeleton-image { aspect-ratio: 4/3; background: #f1f5f9; }
          .skeleton-content { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
          .skeleton-line { height: 1rem; background: #f1f5f9; border-radius: 4px; }
          .skeleton-line.short { width: 30%; }
          .skeleton-line.medium { width: 60%; }
          .skeleton-line.long { width: 90%; }
          .skeleton-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; }
          .skeleton-btn { width: 60px; height: 35px; background: #f1f5f9; border-radius: 0.75rem; }
          
          .shunt {
            position: relative;
            overflow: hidden;
          }
          .shunt::after {
            content: '';
            position: absolute;
            inset: 0;
            transform: translateX(-100%);
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
            animation: shimmer 1.5s infinite;
          }
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}} />
            </div>
        );
    }
    return null;
};

export default Skeleton;
