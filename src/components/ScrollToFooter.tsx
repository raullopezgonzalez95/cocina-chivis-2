import React, { useEffect, useState } from 'react';

const ScrollToFooter: React.FC = () => {
    const [visible, setVisible] = useState(true);

    // Mostrar el botón solo si no estamos cerca del footer
    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('app-footer');
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Si el footer está visible en la ventana, ocultar el botón
            if (footerRect.top < windowHeight && footerRect.bottom > 0) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToFooter = () => {
        const footer = document.getElementById('app-footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!visible) return null;

    return (
        <button
            className="floating-footer-btn"
            onClick={handleScrollToFooter}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 1000,
                padding: '0',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: '#25D366',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            aria-label="Ir al pie de página"
            onMouseOver={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(248, 87, 166, 0.35)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.07)';
            }}
            onMouseOut={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(248, 87, 166, 0.25)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'none';
            }}
        >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.08)" />
                <path d="M12 7v7m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
            </svg>
        </button>
    );
};

export default ScrollToFooter;
