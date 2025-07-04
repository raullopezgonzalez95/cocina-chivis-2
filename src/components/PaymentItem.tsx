import { useState } from 'react';

const clabeNumber = '072650010817772546';

const PaymentItem = () => {
    const [copied, setCopied] = useState(false);

    const handleWhatsApp = () => {
        const phone = '522227331864';
        window.open(`https://wa.me/${phone}`, '_blank');
    };

    const handleCopy = async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(clabeNumber);
            } else {
                // Fallback for iOS/Android or insecure context
                const textArea = document.createElement("textarea");
                textArea.value = clabeNumber;
                textArea.readOnly = true;
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            setCopied(true);
            alert('¡Cuenta CLABE, copiado!');
        } catch (err) {
            setCopied(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 mb-6">
            <hr/>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Se acepta pago por transferencia 💳</h2>
            <div className="mb-3">
                <p className="text-gray-600"><span className="font-semibold"><strong>Beneficiario:</strong></span> Silvia González Morales</p>
                <p className="text-gray-600"><span className="font-semibold"><strong>Banco:</strong></span> Banorte</p>
                <div className="relative inline-block">
                    <p className="text-gray-600">
                        <span className="font-semibold"><strong>Cuenta CLABE: </strong></span>
                        <span                           
                            onClick={handleCopy}
                            style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}
                            title="Click para copiar cuenta CLABE"
                            aria-label="Cuenta CLABE copiable"
                        >
                            {clabeNumber}
                        </span>
                    </p>
                </div>
            </div>
            <br/>
            <button
                onClick={handleWhatsApp}
                className="text-white font-semibold py-2 px-4 rounded-xl shadow-md transition-colors"
                style={{
                    width: '100%',
                    height: '50px',
                    marginTop: '20px',
                    fontSize: '20px',
                    backgroundColor: '#25D366'
                }}
            >
                WhatsApp
            </button>
        </div>
    );
};

export default PaymentItem;
