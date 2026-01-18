import React from 'react';

const Menu = () => {
  // Dati dei piatti (come un database)
  const piatti = [
    { id: 1, nome: "Tagliere Juno", prezzo: 18, desc: "Salumi e formaggi" },
    { id: 2, nome: "Pasta Tartufo", prezzo: 22, desc: "Tagliatelle fresche" },
    { id: 3, nome: "Burger King Juno", prezzo: 15, desc: "Manzo, cheddar, bacon" }, // Esempio fast food
    { id: 4, nome: "Tiramisù", prezzo: 8, desc: "Fatto in casa" },
  ];

  return (
    <section style={{ padding: '80px 20px 100px 20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>Ordina Cibo</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {piatti.map((piatto) => (
          <div key={piatto.id} style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '15px', // Bordi arrotondati stile app
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{piatto.nome}</h3>
              <p style={{ margin: 0, color: '#777', fontSize: '0.9rem' }}>{piatto.desc}</p>
              <div style={{ fontWeight: 'bold', marginTop: '5px', color: '#6b8e23' }}>€{piatto.prezzo}</div>
            </div>
            
            {/* Bottone "Aggiungi" tipico delle app di delivery */}
            <button style={{
              backgroundColor: '#222',
              color: 'white',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}>
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;