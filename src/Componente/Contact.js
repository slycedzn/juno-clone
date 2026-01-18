import React from 'react';

const Contact = () => {
  return (
    <section className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h2>Contattaci</h2>
      <p>Suntem deschisi in fiecare zi, si pentru pranz si pentru cina.</p>
      
      <div style={{ marginTop: '40px' }}>
        <h3>Indirizzo</h3>
        <p>Strada După Ziduri, Brașov 500026</p>
        
        <h3>Telefono</h3>
        <p>+40 741 123 456</p>
        
        <h3>Email</h3>
        <p>prenotazioni@junowinegarden.ro</p>
      </div>
    </section>
  );
};

export default Contact;