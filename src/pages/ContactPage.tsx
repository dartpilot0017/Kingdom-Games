import React from 'react';
import '../App.css'; // Import Tailwind CSS
import ContactForm from '../components/ContactFormPage';

const ContactPage: React.FC = () => {
  return (
    <>
      <section className="bg-shadowGray text-snowWhite py-16 px-8 text-center mt-24">
        <h1 className="text-4xl md:text-6xl font-bold text-vibrantOrange mb-6">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-deepBluePurple max-w-4xl mx-auto mb-12 font-vt323">
          Have questions? Need support? Fill out the form below and our team will reach out to you.
        </p>
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
