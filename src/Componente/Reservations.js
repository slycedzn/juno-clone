import React from 'react';

const Reservations = () => {
  return (
    <section className="container" style={{ padding: '60px 20px', maxWidth: '600px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Book a Table</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        To ensure a spot in our garden, we highly recommend booking in advance.
      </p>

      {/* Form de proba */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name</label>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '10px', fontSize: '1rem' }} />
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date</label>
            <input type="date" style={{ width: '100%', padding: '10px', fontSize: '1rem' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Guests</label>
            <input type="number" min="1" defaultValue="2" style={{ width: '100%', padding: '10px', fontSize: '1rem' }} />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Notes</label>
          <textarea rows="4" placeholder="Allergies or special requests..." style={{ width: '100%', padding: '10px', fontSize: '1rem' }}></textarea>
        </div>

        <button type="button" style={{ 
          backgroundColor: '#6b8e23', 
          color: 'white', 
          padding: '15px', 
          border: 'none', 
          fontSize: '1rem', 
          cursor: 'pointer',
          marginTop: '10px' 
        }}>
          Make Reservation
        </button>
      </form>
    </section>
  );
};

export default Reservations;