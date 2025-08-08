import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [charsLeft, setCharsLeft] = useState(200);

  const maxLength = 200;

  useEffect(() => {
    setCharsLeft(maxLength - message.length);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Here you can handle the form submission logic
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={styles.input}
        placeholder="Your name"
      />

      <label style={styles.label}>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={styles.input}
        placeholder="Your email"
      />

      <label style={styles.label}>Message:</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={maxLength}
        rows="6"
        style={styles.textarea}
        placeholder="Write your message..."
        required
      ></textarea>
      <p style={styles.counter}>{charsLeft} characters left</p>

      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    width: '300px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  },
  label: {
    fontWeight: 'bold'
  },
  input: {
    padding: '8px',
    fontSize: '14px'
  },
  textarea: {
    padding: '8px',
    fontSize: '14px',
    resize: 'none'
  },
  counter: {
    fontSize: '12px',
    textAlign: 'right',
    color: '#666'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ContactForm;
