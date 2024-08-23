

import React from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import contactImage from '../Assets/contactusbg.png';
import '../Styles/ContactUs.css';

const ContactUs = () => {
    const whatsappNumber = "+919033748225";

    return (
        <div className="contact-container ">
            <div className="contact-left">
                <img src={contactImage} alt="Contact Us" className="contact-image" />
            </div>
            <div className="contact-right mt-2">
                <p className="contact-button">📞 Call us and Order</p>
                <p className="contact-hours">Working hours: 9am to 9pm</p>
                <Button
                    className='btn-sm mb-2 mr-2'
                    variant="outline-success"
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp /> Chat with our Pharmacist
                </Button>
            </div>
        </div>
    );
}

export default ContactUs;
