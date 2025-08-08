import React from 'react';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My Website</h1>
      <ContactForm />
      <hr />
      <Portfolio />
    </div>
  );
}

export default App;
