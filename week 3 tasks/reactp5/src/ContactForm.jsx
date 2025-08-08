import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [charsLeft, setCharsLeft] = useState(200);
  const [submitted, setSubmitted] = useState(false);

  const maxLength = 200;
  const minLength = 10;

  useEffect(() => {
    setCharsLeft(maxLength - formData.message.length);
  }, [formData.message]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.length < minLength) newErrors.message = `Minimum ${minLength} characters.`;
    else if (formData.message.length > maxLength) newErrors.message = `Max ${maxLength} characters allowed.`;
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Contact Us</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
        placeholder="Your name"
      />
      {errors.name && <p style={styles.error}>{errors.name}</p>}

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
        placeholder="Your email"
      />
      {errors.email && <p style={styles.error}>{errors.email}</p>}

      <label>Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        maxLength={maxLength}
        rows="5"
        style={styles.textarea}
        placeholder="Write your message..."
      />
      <p style={styles.counter}>{charsLeft} characters left</p>
      {errors.message && <p style={styles.error}>{errors.message}</p>}

      <button type="submit" style={styles.button}>Submit</button>
      {submitted && <p style={styles.success}>Form submitted successfully!</p>}
    </form>
  );
};

const styles = {
  form: {
    width: '320px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#d5b7f2ff',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

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
    color: '#555'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#6cb0f9ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '-8px',
    marginBottom: '4px'
  },
  success: {
    color: 'green',
    fontSize: '14px',
    textAlign: 'center',
    marginTop: '10px'
  }
};

export default ContactForm;

