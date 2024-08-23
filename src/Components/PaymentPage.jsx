import React from 'react';
import '../Styles/PaymentPage.css'; // Add any styles needed for your payment page
import qrCode from '../Assets/qrcode.jpg'; // Replace with the path to your QR code image

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h2>Scan to Pay</h2>
      <img src={qrCode} alt="QR Code" className="qr-code" />
      <p>You can scan the QR code above to pay using Google Pay.</p>
    </div>
  );
};

export default PaymentPage;
