import React, { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A React-based weather forecasting app using OpenWeather API.',
    details: 'Built with React, Axios, and external APIs. Fully responsive and clean UI.',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio website made with HTML, CSS, and JavaScript.',
    details: 'Showcases my resume, projects, and contact form with email integration.',
  },
  {
    id: 3,
    title: 'E-commerce Store',
    description: 'Frontend of an online store using React and Context API.',
    details: 'Features: Add to cart, product filtering, and responsive layout.',
  },
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Portfolio</h2>
      <div style={styles.grid}>
        {portfolioItems.map((item) => (
          <div key={item.id} style={styles.card} onClick={() => setSelectedItem(item)}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div style={styles.modalOverlay} onClick={() => setSelectedItem(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.details}</p>
            <button onClick={() => setSelectedItem(null)} style={styles.closeBtn}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#a3f0afff',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(246, 155, 155, 0.3)',
  },
  closeBtn: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#8daac8ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Portfolio;
