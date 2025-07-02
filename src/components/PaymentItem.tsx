import React from 'react';

const PaymentItem = () => {
    const handleWhatsApp = () => {
        const phone = '522227331864';
        window.open(`https://wa.me/${phone}`, '_blank');
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6 mb-6">
            <br/>
            <br/>
            <hr/>
            <br/>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Se acepta pago por transferencia 💳</h2>
            <br/>
            <div className="mb-3">
                <p className="text-gray-600"><span className="font-semibold"><strong>Beneficiario:</strong></span> Silvia González Morales</p>
                <p className="text-gray-600"><span className="font-semibold"><strong>Banco:</strong></span> Banorte</p>
                <p className="text-gray-600"><span className="font-semibold"><strong>Cuenta clabe:</strong></span> 072650010817772546</p> 
            </div>
            <br/>
            <br/>
            <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition-colors"
                style={{ width: '100%', height: '50px', marginTop: '20px', fontSize: '20px' }}
            >
                WhatsApp
            </button>
        </div>
    );
};

export default PaymentItem;
